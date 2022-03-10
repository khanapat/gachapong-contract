import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy, log, get } = hre.deployments;
    const chainId = await hre.getChainId();

    log("Deploying the contracts with the account: ", deployer);
    log("Account Balance: ", (await hre.ethers.provider.getBalance(deployer)).toString());

    const currencyManager = await get("CurrencyManager");
    const jackpot = await get("Jackpot");

    const gachapong = await deploy("Gachapong", {
        from: deployer,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            execute: {
                init: {
                    methodName: "initialize",
                    args: [
                        deployer,
                        currencyManager.address,
                        jackpot.address,
                        500, // 5 times
                        1200 // 12 times
                    ],
                }
            }
        },
        log: true
    });

    log("Gachapong address: ", gachapong.address, " network: ", hre.network.name);
    log("----------------------------------------------------")
}

export default func;

func.id = "deploy_gachapong";
func.tags = ["all", "gachapong"];