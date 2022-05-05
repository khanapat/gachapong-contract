// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

contract Jackpot is
    Initializable,
    AccessControlUpgradeable,
    OwnableUpgradeable,
    PausableUpgradeable
{
    using SafeERC20Upgradeable for IERC20Upgradeable;

    struct JackpotResult {
        uint256 jackpotId;
        uint256 ref;
        uint256 winnerId;
        uint256 reward;
        bool isClaimable;
    }

    uint16 public addOnPoolReward;
    uint256 public currentJackpotRound;
    uint256 public ticketPrice;

    address public wallet;

    bytes32 public constant GACHAPONG_ROLE = keccak256("GACHAPONG_ROLE");
    bytes32 public constant WORKER_ROLE = keccak256("WORKER_ROLE");

    IERC20Upgradeable public token;

    mapping(uint256 => JackpotResult) public rounds;
    mapping(uint256 => mapping(address => uint256[])) public userJackpot;

    event AddTicket(address user, uint256 ticketId);

    event ClosePool(uint256 indexed round, uint256 ref);

    event GenerateRandom(uint256 indexed round, uint256 random);

    event ClaimReward(uint256 indexed round, address owner, uint256 reward);

    function initialize(
        address _wallet,
        address _token,
        uint256 _ticketPrice,
        uint16 _addOnRewardPool
    ) public initializer {
        OwnableUpgradeable.__Ownable_init();
        AccessControlUpgradeable.__AccessControl_init();
        PausableUpgradeable.__Pausable_init();

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        token = IERC20Upgradeable(_token);
        wallet = _wallet;
        ticketPrice = _ticketPrice;
        addOnPoolReward = _addOnRewardPool;
    }

    function setToken(address _token) external onlyOwner whenPaused {
        require(_token != address(0), "Jackpot.sol: Must be address.");
        token = IERC20Upgradeable(_token);
    }

    function setAddOnPoolReward(uint16 _addOnPoolReward)
        external
        onlyOwner
        whenPaused
    {
        require(_addOnPoolReward != 0, "Jackpot.sol: Must be > 0.");
        addOnPoolReward = _addOnPoolReward;
    }

    function setWallet(address _wallet) external onlyOwner whenPaused {
        require(_wallet != address(0), "Jackpot.sol: Must be address.");
        wallet = _wallet;
    }

    function addTicket(address _user, uint256 _betAmount)
        external
        onlyRole(GACHAPONG_ROLE)
        whenNotPaused
    {
        uint256 ticketAmount = _betAmount / ticketPrice;
        if (ticketAmount > 0) {
            for (uint256 i; i < ticketAmount; i++) {
                uint256 id = rounds[currentJackpotRound].jackpotId++;
                userJackpot[currentJackpotRound][_user].push(id);
                emit AddTicket(_user, id);
            }
        }
        rounds[currentJackpotRound].reward += calculateAddOnReward(_betAmount);
    }

    function closePool(uint256 _ref) external onlyRole(WORKER_ROLE) {
        require(_ref > block.number, "Jackpot.sol: Invalid ref.");

        uint256 round = currentJackpotRound++;
        rounds[round].ref = _ref;

        emit ClosePool(round, _ref);
    }

    function generateRandom(uint256 _round) external onlyRole(WORKER_ROLE) {
        JackpotResult storage result = rounds[_round];

        require(result.ref != 0, "Jackpot.sol: Need ref.");
        require(result.ref < block.number, "Jackpot.sol: Need more time.");
        require(!result.isClaimable, "Jackpot.sol: Already gen.");

        uint256 random = result.jackpotId != 0
            ? _generateRandom(result.ref, result.jackpotId)
            : 0;
        result.winnerId = random;
        result.isClaimable = true;

        emit GenerateRandom(_round, result.winnerId);
    }

    function _generateRandom(uint256 _ref, uint256 _totalTicket)
        internal
        view
        returns (uint256 random)
    {
        random = uint256(blockhash(_ref)) % _totalTicket;
    }

    function claimReward(uint256 _round) external {
        JackpotResult storage result = rounds[_round];

        require(result.isClaimable, "Jackpot.sol: Not claimable.");

        uint256 reward = _calculateReward(_round, msg.sender);

        require(reward != 0, "Jackpot.sol: No prize.");

        result.reward = 0;
        token.safeTransferFrom(wallet, msg.sender, reward);

        emit ClaimReward(_round, msg.sender, reward);
    }

    function viewReward(uint256 _round, address _user)
        external
        view
        returns (uint256)
    {
        if (!rounds[_round].isClaimable) {
            return 0;
        }
        return _calculateReward(_round, _user);
    }

    function _calculateReward(uint256 _round, address _user)
        internal
        view
        returns (uint256)
    {
        uint256[] memory tickets = userJackpot[_round][_user];
        for (uint256 i; i < tickets.length; ++i) {
            if (tickets[i] == rounds[_round].winnerId) {
                return rounds[_round].reward;
            }
        }
        return 0;
    }

    function calculateAddOnReward(uint256 _amount)
        public
        view
        returns (uint256)
    {
        return (_amount * addOnPoolReward) / 100;
    }

    function getTickets(address _user, uint256 _round)
        external
        view
        returns (uint256[] memory)
    {
        return userJackpot[_round][_user];
    }

    // for testing. this function will be removed if deploy.
    function setRandom(uint256 _round, uint16 _number) external onlyOwner {
        JackpotResult storage result = rounds[_round];
        result.winnerId = _number;
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
