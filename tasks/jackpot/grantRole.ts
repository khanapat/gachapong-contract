import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

let owner: SignerWithAddress;

task("grantRoleJack", "grant role to contract")
    .addParam("role", "contract role")
    .addParam("address", "user address")
    .setAction(async (taskArgs, hre) => {
        const Jackpot = await hre.deployments.get("Jackpot");
        const jackpot = await hre.ethers.getContractAt("Jackpot", Jackpot.address);
        console.log("Jackpot Address:", Jackpot.address);

        [owner] = await hre.ethers.getSigners();
        console.log("Signer:", owner.address);

        const role = hre.ethers.utils.id(taskArgs.role);
        console.log("Role:", role);

        const tx = await jackpot.connect(owner).grantRole(role, taskArgs.address);
        await tx.wait();

        console.log(taskArgs.role, "role:", await jackpot.hasRole(role, taskArgs.address));
    });

export default {};