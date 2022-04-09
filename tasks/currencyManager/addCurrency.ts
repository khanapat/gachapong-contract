import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

let owner: SignerWithAddress;

task("addCurrency", "Add currency to whitelist")
    .addParam("currency", "currency address")
    .setAction(async (taskArgs, hre) => {
        const CurrencyManager = await hre.deployments.get("CurrencyManager");
        const currencyManager = await hre.ethers.getContractAt("CurrencyManager", CurrencyManager.address);
        console.log("CurrencyManager Address:", currencyManager.address);

        [owner] = await hre.ethers.getSigners();
        console.log("Signer:", owner.address);

        console.log("Currency:", taskArgs.currency);

        const tx = await currencyManager.connect(owner).addCurrency(taskArgs.currency);
        await tx.wait(1);

        console.log("Currency Whitelist:", await currencyManager.isCurrencyWhitelisted(taskArgs.currency));
    });

export default {};