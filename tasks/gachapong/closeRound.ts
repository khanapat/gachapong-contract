import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

let owner: SignerWithAddress;

task("closeRound", "User buy lottery")
    .addParam("ref1", "Two digit ref")
    .addParam("ref2", "Three digit ref")
    .setAction(async (taskArgs, hre) => {
        const Gachapong = await hre.deployments.get("Gachapong");
        const gachapong = await hre.ethers.getContractAt("Gachapong", Gachapong.address);
        console.log("Gachapong Address:", Gachapong.address);

        [owner] = await hre.ethers.getSigners();
        console.log("Signer:", owner);

        console.log("Previous round:", (await gachapong.currentLotteryRound()).toString());

        const tx = await gachapong.connect(owner).closeRound(taskArgs.ref1, taskArgs.ref2);
        await tx.wait(1);

        console.log("Current round:", (await gachapong.currentLotteryRound()).toString());
    });

export default {};