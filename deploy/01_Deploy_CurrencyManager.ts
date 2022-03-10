import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy, log, get } = hre.deployments;
    const chainId = await hre.getChainId();

    log("Deploying the contracts with the account: ", deployer);
    log("Account Balance: ", (await hre.ethers.provider.getBalance(deployer)).toString());

    const currencyManager = await deploy("CurrencyManager", {
        from: deployer,
        args: [],
        log: true
    });

    log("CurrencyManager address: ", currencyManager.address, " network: ", hre.network.name);
    log("----------------------------------------------------")
}

export default func;

func.id = "deploy_currency";
func.tags = ["all", "currency"];