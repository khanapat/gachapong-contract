import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import { BigNumber } from "ethers";

let owner: SignerWithAddress;

type LotteryResult = {
    twoDigitRef: BigNumber;
    threeDigitRef: BigNumber;
    twoDigitNumber: number;
    threeDigitNumber: number;
    isClaimable: boolean;
};

task("generateRandomGacha", "Generate random at round")
    .addParam("round", "Lottery round")
    .setAction(async (taskArgs, hre) => {
        const Gachapong = await hre.deployments.get("Gachapong");
        const gachapong = await hre.ethers.getContractAt("Gachapong", Gachapong.address);
        console.log("Gachapong Address:", Gachapong.address);

        [owner] = await hre.ethers.getSigners();
        console.log("Signer:", owner);

        const tx = await gachapong.connect(owner).generateRandom(taskArgs.round);
        await tx.wait(1);

        const result: LotteryResult = await gachapong.rounds(taskArgs.round);
        console.log("TwoDigitNumber:", result.twoDigitNumber, "ThreeDigitNumber:", result.threeDigitNumber);
    });

export default {};