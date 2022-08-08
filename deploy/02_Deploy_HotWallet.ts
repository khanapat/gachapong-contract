import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, log, get } = hre.deployments;
  const chainId = await hre.getChainId();

  log("Deploying the contracts with the account: ", deployer);
  log(
    "Account Balance: ",
    (await hre.ethers.provider.getBalance(deployer)).toString()
  );

  const hotWallet = await deploy("HotWallet", {
    from: deployer,
    args: ["0xD7da76c1D4f5Af492dB089062797AAd5b5D1c7E9"],
    log: true,
  });

  log("HotWallet address: ", hotWallet.address, " network: ", hre.network.name);
  log("----------------------------------------------------");
};

export default func;

func.id = "deploy_hotwallet";
func.tags = ["all", "hotwallet"];
