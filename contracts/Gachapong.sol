//SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract Gachapong {
    struct Lottery {
        uint256 round;
        uint256 number;
        uint256 amount;
        address owner;
    }

    uint256 public currentLotteryRound;
    uint256 public currentLotteryId;

    mapping(uint256 => Lottery) public lotteries;

    function buyLottery(uint256 _number, uint256 _amount) public {
        Lottery storage lottery = lotteries[currentLotteryId];
        lottery.round = currentLotteryRound;
        lottery.number = _number;
        lottery.amount = _amount;
        lottery.owner = msg.sender;

        currentLotteryId++;
    }
}
