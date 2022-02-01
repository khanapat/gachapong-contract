// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

contract Jackpot is
    Initializable,
    AccessControlUpgradeable,
    OwnableUpgradeable,
    ReentrancyGuardUpgradeable,
    PausableUpgradeable
{
    using SafeERC20Upgradeable for IERC165Upgradeable;

    struct JackpotResult {
        uint256 ref;
        uint256 winnerId;
        uint256 reward;
        bool isClaimable;
    }

    uint256 public currentJackpotRound;
    uint256 public currentJackpotId;

    address public wallet;

    bytes32 public constant GACHAPONG_ROLE = keccak256("GACHAPONG_ROLE");

    IERC20Upgradeable public token;

    mapping(uint256 => JackpotResult) public rounds;
    mapping(uint256 => mapping(address => uint256[])) public userJackpot;

    event AddTicket();

    function initialize(address _wallet, address _token) public initializer {
        OwnableUpgradeable.__Ownable_init();
        AccessControlUpgradeable.__AccessControl_init();
        ReentrancyGuardUpgradeable.__ReentrancyGuard_init();
        PausableUpgradeable.__Pausable_init();

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        token = IERC20Upgradeable(_token);
        wallet = _wallet;
    }

    function setWallet(address _wallet) external onlyOwner whenPaused {
        require(_wallet != address(0), "Gachapong.sol: Must be address.");
        wallet = _wallet;
    }
}
