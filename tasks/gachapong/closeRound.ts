import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

let owner: SignerWithAddress;

task("closeRoundGacha", "User buy lottery")
    .addParam("ref1", "add block number to be two digit ref")
    .addParam("ref2", "add block number to be three digit ref")
    .setAction(async (taskArgs, hre) => {
        const Gachapong = await hre.deployments.get("Gachapong");
        const gachapong = await hre.ethers.getContractAt("Gachapong", Gachapong.address);
        console.log("Gachapong Address:", Gachapong.address);

        [owner] = await hre.ethers.getSigners();
        console.log("Signer:", owner.address);

        console.log("Previous round:", (await gachapong.currentLotteryRound()).toString());

        const currentBlockNumber = await hre.ethers.provider.getBlockNumber();
        console.log("Current block number:", currentBlockNumber);
        
        const ref1 = currentBlockNumber + parseInt(taskArgs.ref1);
        const ref2 = currentBlockNumber + parseInt(taskArgs.ref2);
        console.log("Ref1:", ref1, "Ref2:", ref2);

        const tx = await gachapong.connect(owner).closeRound(taskArgs.ref1, taskArgs.ref2);
        await tx.wait(1);

        console.log("Current round:", (await gachapong.currentLotteryRound()).toString());
    });

export default {};