import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

let owner: SignerWithAddress;

task("closePool", "Close jackpot pool")
    .addParam("ref", "add block number to be ref")
    .setAction(async (taskArgs, hre) => {
        const Jackpot = await hre.deployments.get("Jackpot");
        const jackpot = await hre.ethers.getContractAt("Jackpot", Jackpot.address);
        console.log("Jackpot Address:", Jackpot.address);

        [owner] = await hre.ethers.getSigners();
        console.log("Signer:", owner.address);

        console.log("Previous round:", (await jackpot.currentJackpotRound()).toString());

        const currentBlockNumber = await hre.ethers.provider.getBlockNumber();
        console.log("Current block number:", currentBlockNumber);
        
        const ref = currentBlockNumber + parseInt(taskArgs.ref);
        console.log("Ref:", ref);

        const tx = await jackpot.connect(owner).closePool(ref);
        await tx.wait(1);

        console.log("Current round:", (await jackpot.currentJackpotRound()).toString());
    });

export default {};