// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HotWallet is Ownable, AccessControl {
  using SafeERC20 for IERC20;

  address public coldWallet;

  bytes32 public constant WORKER_ROLE =
    0xf1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7; // keccak256("WORKER_ROLE")

  error WithdrawNativeTokenFail();

  event Deposit(address sender, uint256 amount);
  event WithdrawERC20(address token, uint256 amount);
  event WithdrawNativeToken(uint256 amount);

  constructor(address _coldWallet) {
    coldWallet = _coldWallet;

    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
  }

  function updateColdWallet(address _coldWallet) external onlyOwner {
    coldWallet = _coldWallet;
  }

  function withdrawERC20(address _token, uint256 _amount)
    external
    onlyRole(WORKER_ROLE)
  {
    IERC20(_token).safeTransfer(coldWallet, _amount);

    emit WithdrawERC20(_token, _amount);
  }

  function withdrawNativeToken(uint256 _amount) external onlyRole(WORKER_ROLE) {
    (bool success, ) = coldWallet.call{ value: _amount }("");
    if (!success) {
      revert WithdrawNativeTokenFail();
    }

    emit WithdrawNativeToken(_amount);
  }

  function approveToken(address _token, address _to) external onlyOwner {
    IERC20(_token).safeApprove(_to, type(uint256).max);
  }

  receive() external payable {
    emit Deposit(msg.sender, msg.value);
  }
}
