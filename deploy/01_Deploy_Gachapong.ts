import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy, log } = hre.deployments;
    const chainId = await hre.getChainId();

    log("Deploying the contracts with the account: ", deployer);
    log("Account Balance: ", (await hre.ethers.provider.getBalance(deployer)).toString());

    const gachapong = await deploy("Gachapong", {
        from: deployer,
        args: [],
        log: true
    });

    log("Gachapong address: ", gachapong.address, " network: ", hre.network.name);
    log("----------------------------------------------------")
}

export default func;

func.id = "deploy_gachapong";
func.tags = ["all", "gachapong"];