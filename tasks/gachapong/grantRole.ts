import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

let owner: SignerWithAddress;

task("grantRole", "grant role to contract")
    .addParam("role", "contract role")
    .addParam("address", "user address")
    .setAction(async (taskArgs, hre) => {
        const Gachapong = await hre.deployments.get("Gachapong");
        const gachapong = await hre.ethers.getContractAt("Gachapong", Gachapong.address);
        console.log("Gachapong Address:", Gachapong.address);

        [owner] = await hre.ethers.getSigners();
        console.log("Signer:", owner.address);

        const role = hre.ethers.utils.id(taskArgs.role);
        console.log("Role:", role);

        const tx = await gachapong.connect(owner).grantRole(role, taskArgs.address);
        await tx.wait(1);

        console.log(taskArgs.role, "role:", await gachapong.hasRole(role, taskArgs.address));
    });

export default {};