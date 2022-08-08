import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

let owner: SignerWithAddress;
let player1: SignerWithAddress;
let player2: SignerWithAddress;

task("buyLottery", "User buy lottery")
  .addParam("type", "Lottery type")
  .addParam("number", "Lottery number")
  .addParam("amount", "Bet amount")
  .setAction(async (taskArgs, hre) => {
    const StableCoin = await hre.deployments.get("StableCoin");
    // const stableCoin = await hre.ethers.getContractAt("StableCoin", StableCoin.address);
    console.log("StableCoin Address:", StableCoin.address);

    const Gachapong = await hre.deployments.get("Gachapong");
    const gachapong = await hre.ethers.getContractAt(
      "Gachapong",
      Gachapong.address
    );
    console.log("Gachapong Address:", Gachapong.address);

    [owner, player1, player2] = await hre.ethers.getSigners();
    console.log("Signer:", owner.address);

    const tx = await gachapong
      .connect(owner)
      .buyLottery(
        StableCoin.address,
        taskArgs.type,
        taskArgs.number,
        taskArgs.amount
      );
    await tx.wait(1);

    const currentRound = await gachapong.currentLotteryRound();
    const list = await gachapong.getLotteries(owner.address, currentRound);
    console.log("Lottery List:", list);
  });

export default {};
