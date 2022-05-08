import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

let owner: SignerWithAddress;
let player1: SignerWithAddress;
let player2: SignerWithAddress;

task("approveToken", "User approve token")
    .addParam("spender", "User approve token to spender")
    .addParam("amount", "Token amount")
    .setAction(async (taskArgs, hre) => {
        const StableCoin = await hre.deployments.get("StableCoin");
        const stableCoin = await hre.ethers.getContractAt("StableCoin", StableCoin.address);
        console.log("StableCoin Address:", StableCoin.address);

        [owner, player1, player2] = await hre.ethers.getSigners();
        console.log("Signer:", owner.address);

        let amount = taskArgs.amount;
        if (amount === "0") {
            amount = hre.ethers.constants.MaxUint256;
        }
        console.log("Amount:", amount.toString());

        const tx = await stableCoin.connect(owner).approve(taskArgs.spender, amount);
        await tx.wait(1);

        console.log("Allowance:", (await stableCoin.allowance(owner.address, taskArgs.spender)).toString());
    });

export default {};