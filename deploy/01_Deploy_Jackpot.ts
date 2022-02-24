import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy, log, get } = hre.deployments;
    const chainId = await hre.getChainId();

    log("Deploying the contracts with the account: ", deployer);
    log("Account Balance: ", (await hre.ethers.provider.getBalance(deployer)).toString());

    const token = await get("StableCoin");

    const jackpot = await deploy("Jackpot", {
        from: deployer,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            execute: {
                init: {
                    methodName: "initialize",
                    args: [
                        deployer,
                        token.address,
                        "100000000000000000000", // 100 ether
                        30 // 30%
                    ],
                }
            }
        },
        log: true
    });

    log("Jackpot address: ", jackpot.address, " network: ", hre.network.name);
    log("----------------------------------------------------")
}

export default func;

func.id = "deploy_jackpot";
func.tags = ["all", "jackpot"];