import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import { BigNumber } from "ethers";

let owner: SignerWithAddress;

type JackpotResult = {
    jackpotId: BigNumber;
    ref: BigNumber;
    winnerId: BigNumber;
    reward: BigNumber;
    isClaimable: boolean;
};

task("generateRandomJack", "Generate random at round")
    .addParam("round", "Jackpot round")
    .setAction(async (taskArgs, hre) => {
        const Jackpot = await hre.deployments.get("Jackpot");
        const jackpot = await hre.ethers.getContractAt("Jackpot", Jackpot.address);
        console.log("Jackpot Address:", Jackpot.address);

        [owner] = await hre.ethers.getSigners();
        console.log("Signer:", owner.address);

        const tx = await jackpot.connect(owner).generateRandom(taskArgs.round);
        await tx.wait(1);

        const result: JackpotResult = await jackpot.rounds(taskArgs.round);
        console.log("WinnerID:", result.winnerId, "Reward:", result.reward);
    });

export default {};