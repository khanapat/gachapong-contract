// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

interface IJackpot {
    function addTicket(address user, uint256 betAmount) external;
}
