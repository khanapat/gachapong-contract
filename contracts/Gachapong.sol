// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "./utils/IJackpot.sol";
import "./utils/ICurrencyManager.sol";

contract Gachapong is
    Initializable,
    AccessControlUpgradeable,
    OwnableUpgradeable,
    PausableUpgradeable
{
    using SafeERC20Upgradeable for IERC20Upgradeable;

    enum LotteryType {
        TwoDigit,
        ThreeDigit
    }

    struct Lottery {
        uint256 lotteryRound;
        LotteryType lotteryType;
        uint256 lotteryNumber;
        uint256 amount;
        address currency;
        address owner;
    }

    struct LotteryResult {
        uint256 twoDigitRef;
        uint256 threeDigitRef;
        uint16 twoDigitNumber;
        uint16 threeDigitNumber;
        bool isClaimable;
    }

    uint16 public twoDigitReward;
    uint16 public threeDigitReward;
    uint256 public currentLotteryRound;
    uint256 public currentLotteryId;

    address public wallet;

    bytes32 public constant WORKER_ROLE = keccak256("WORKER_ROLE");

    IJackpot public jackpot;
    ICurrencyManager public currencyManager;

    mapping(uint256 => Lottery) public lotteries;
    mapping(uint256 => LotteryResult) public rounds;
    mapping(address => mapping(uint256 => uint256[])) public userLotteries;

    event NewCurrencyManager(address indexed currencyManager);

    event BuyLottery(
        uint256 indexed round,
        uint256 indexed id,
        address buyer,
        LotteryType lotteryType,
        uint256 number,
        uint256 amount,
        address currency
    );

    event CloseRound(
        uint256 indexed round,
        uint256 twoDigitRef,
        uint256 threeDigitRef
    );

    event GenerateRandom(
        uint256 indexed round,
        uint16 twoDigitRandom,
        uint16 threeDigitRandom
    );

    event ClaimReward(
        uint256 indexed round,
        uint256 indexed id,
        address owner,
        uint256 reward,
        address currency
    );

    function initialize(
        address _wallet,
        address _currencyManager,
        address _jackpot,
        uint16 _twoDigitReward,
        uint16 _threeDigitReward
    ) public initializer {
        OwnableUpgradeable.__Ownable_init();
        AccessControlUpgradeable.__AccessControl_init();
        PausableUpgradeable.__Pausable_init();

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        currencyManager = ICurrencyManager(_currencyManager);
        jackpot = IJackpot(_jackpot);
        wallet = _wallet;
        twoDigitReward = _twoDigitReward;
        threeDigitReward = _threeDigitReward;
    }

    function updateCurrencyManager(address _currencyManager)
        external
        onlyOwner
        whenPaused
    {
        require(
            _currencyManager != address(0),
            "Gachapong.sol: Must be address."
        );
        currencyManager = ICurrencyManager(_currencyManager);

        emit NewCurrencyManager(_currencyManager);
    }

    function setJackpot(address _jackpot) external onlyOwner whenPaused {
        require(_jackpot != address(0), "Gachapong.sol: Must be address.");
        jackpot = IJackpot(_jackpot);
    }

    function setMultiplyReward(uint16 _twoDigitReward, uint16 _threeDigitReward)
        external
        onlyOwner
        whenPaused
    {
        require(
            _twoDigitReward != 0 && _threeDigitReward != 0,
            "Gachapong.sol: Must be > 0."
        );
        twoDigitReward = _twoDigitReward;
        threeDigitReward = _threeDigitReward;
    }

    function setWallet(address _wallet) external onlyOwner whenPaused {
        require(_wallet != address(0), "Gachapong.sol: Must be address.");
        wallet = _wallet;
    }

    function buyLottery(
        address _currency,
        LotteryType _type,
        uint256 _number,
        uint256 _amount
    ) external whenNotPaused {
        require(_amount != 0, "Gachapong.sol: Minimum bet.");

        if (_type == LotteryType.TwoDigit) {
            require(_number <= 99, "Gachapong.sol: Out of range.");
        } else {
            require(_number <= 999, "Gachapong.sol: Out of range.");
        }

        require(
            currencyManager.isCurrencyWhitelisted(_currency),
            "Gachapong.sol: Not whitelisted."
        );

        IERC20Upgradeable(_currency).safeTransferFrom(
            msg.sender,
            wallet,
            _amount
        );

        uint256 id = currentLotteryId++;
        Lottery storage lottery = lotteries[id];
        lottery.lotteryRound = currentLotteryRound;
        lottery.lotteryType = _type;
        lottery.lotteryNumber = _number;
        lottery.amount = _amount;
        lottery.currency = _currency;
        lottery.owner = msg.sender;

        userLotteries[msg.sender][currentLotteryRound].push(id);

        jackpot.addTicket(msg.sender, _amount);

        emit BuyLottery(
            lottery.lotteryRound,
            id,
            lottery.owner,
            _type,
            lottery.lotteryNumber,
            lottery.amount,
            lottery.currency
        );
    }

    function closeRound(uint256 _twoDigitRef, uint256 _threeDigitRef)
        external
        onlyRole(WORKER_ROLE)
    {
        require(
            _twoDigitRef > block.number &&
                _threeDigitRef > block.number &&
                _twoDigitRef != _threeDigitRef,
            "Gachapong.sol: Invalid ref."
        );

        uint256 round = currentLotteryRound++;
        LotteryResult storage result = rounds[round];
        result.twoDigitRef = _twoDigitRef;
        result.threeDigitRef = _threeDigitRef;

        emit CloseRound(round, result.twoDigitRef, result.threeDigitRef);
    }

    function generateRandom(uint256 _round) external onlyRole(WORKER_ROLE) {
        LotteryResult storage result = rounds[_round];

        require(
            result.twoDigitRef != 0 && result.threeDigitRef != 0,
            "Gachapong.sol: Need ref."
        );
        require(
            result.twoDigitRef < block.number &&
                result.threeDigitRef < block.number,
            "Gachapong.sol: Need more time."
        );
        require(!result.isClaimable, "Gachapong.sol: Already gen.");

        uint256 twoDigitRef = result.twoDigitRef;
        uint256 threeDigitRef = result.threeDigitRef;
        if ((block.number - result.twoDigitRef) > 256) {
            twoDigitRef = block.number - 2;
            threeDigitRef = block.number - 1;
        }

        (uint16 twoDigitRandom, uint16 threeDigitRandom) = _generateRandom(
            twoDigitRef,
            threeDigitRef
        );
        result.twoDigitNumber = twoDigitRandom;
        result.threeDigitNumber = threeDigitRandom;
        result.isClaimable = true;

        emit GenerateRandom(
            _round,
            result.twoDigitNumber,
            result.threeDigitNumber
        );
    }

    function _generateRandom(uint256 _twoDigitRef, uint256 _threeDigitRef)
        internal
        view
        returns (uint16 twoDigitRandom, uint16 threeDigitRandom)
    {
        twoDigitRandom = uint16(uint256(blockhash(_twoDigitRef)) % 100);
        threeDigitRandom = uint16(uint256(blockhash(_threeDigitRef)) % 1000);
    }

    function claimReward(uint256 _lotteryId) external {
        Lottery storage lottery = lotteries[_lotteryId];

        require(
            rounds[lottery.lotteryRound].isClaimable,
            "Gachapong.sol: Not claimable."
        );
        require(lottery.owner == msg.sender, "Gachapong.sol: Not owner.");

        lottery.owner = address(0);
        uint256 reward = _calculateReward(_lotteryId);

        require(reward != 0, "Gachapong.sol: No prize.");

        IERC20Upgradeable(lottery.currency).safeTransferFrom(
            wallet,
            msg.sender,
            reward
        );

        emit ClaimReward(
            lottery.lotteryRound,
            _lotteryId,
            msg.sender,
            reward,
            lottery.currency
        );
    }

    function viewReward(uint256 _lotteryId) external view returns (uint256) {
        uint256 round = lotteries[_lotteryId].lotteryRound;

        if (!rounds[round].isClaimable) {
            return 0;
        }
        return _calculateReward(_lotteryId);
    }

    function _calculateReward(uint256 _lotteryId)
        internal
        view
        returns (uint256)
    {
        Lottery memory lottery = lotteries[_lotteryId];
        LotteryResult memory round = rounds[lottery.lotteryRound];

        if (lottery.lotteryType == LotteryType.TwoDigit) {
            if (round.twoDigitNumber == lottery.lotteryNumber) {
                return (lottery.amount * twoDigitReward) / 100;
            }
            return 0;
        } else {
            if (round.threeDigitNumber == lottery.lotteryNumber) {
                return (lottery.amount * threeDigitReward) / 100;
            }
            return 0;
        }
    }

    function getLotteries(address _user, uint256 _round)
        external
        view
        returns (uint256[] memory)
    {
        return userLotteries[_user][_round];
    }

    // for testing. this function will be removed if deploy.
    function setRandom(
        uint256 _round,
        uint16 _twoDigitNumber,
        uint16 _threeDigitNumber
    ) external onlyOwner {
        LotteryResult storage result = rounds[_round];
        result.twoDigitNumber = _twoDigitNumber;
        result.threeDigitNumber = _threeDigitNumber;
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    receive() external payable {
        revert("Gachapong.sol: Invalid.");
    }

    fallback() external payable {
        revert("Gachapong.sol: Invalid.");
    }
}
