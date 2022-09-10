import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

task("round", "jackpot result")
    .addParam("round", "round number for jackpot result")
    .setAction(async (taskArgs, hre) => {
        const Jackpot = await hre.deployments.get("Jackpot");
        const jackpot = await hre.ethers.getContractAt("Jackpot", Jackpot.address);
        console.log("Jackpot Address:", Jackpot.address);

        console.log("Current round:", (await jackpot.currentJackpotRound()).toString());

        const currentBlockNumber = await hre.ethers.provider.getBlockNumber();
        console.log("Current block number:", currentBlockNumber);

        // const ref = currentBlockNumber + parseInt(taskArgs.ref);
        // console.log("Ref:", ref);

        const jackpotResult = await jackpot.rounds(taskArgs.round);

        console.log("Jackpot Result:", jackpotResult)
    });

export default {};