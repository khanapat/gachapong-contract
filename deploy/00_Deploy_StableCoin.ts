import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers, deployments, network, getChainId } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy, log } = deployments;

    log("Deploying the contracts with the account: ", deployer);
    log("Account Balance: ", (await ethers.provider.getBalance(deployer)).toString());

    const stable = await deploy("StableCoin", {
        from: deployer,
        args: [
            "USDC TEST",
            "USDC"
        ],
        log: true,
    });

    log("Token address: ", stable.address, " network: ", network.name);
    log("----------------------------------------------------")
}

export default func;
func.id = "deploy_stablecoin";
func.tags = ["all", "stablecoin", "main"];