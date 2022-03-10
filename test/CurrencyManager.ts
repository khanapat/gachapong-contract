import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { CurrencyManager, CurrencyManager__factory, StableCoin, StableCoin__factory } from "../typechain";

use(solidity);

const currencyRemovedEvent = "CurrencyRemoved";
const currencyWhitelistedEvent = "CurrencyWhitelisted";

describe("CurrencyManager", function () {
    let CurrencyManager: CurrencyManager__factory;
    let currencyManager: CurrencyManager;
    let Token1: StableCoin__factory;
    let token1: StableCoin;
    let Token2: StableCoin__factory;
    let token2: StableCoin;
    let owner: SignerWithAddress;

    before(async function () {
        [owner] = await ethers.getSigners();

        Token1 = await ethers.getContractFactory("StableCoin", owner);
        Token2 = await ethers.getContractFactory("StableCoin", owner);
        CurrencyManager = await ethers.getContractFactory("CurrencyManager", owner);
    });

    beforeEach(async function () {
        token1 = (await Token1.deploy(
            "USDC TEST",
            "USDC",
        )) as StableCoin;
        await token1.deployed();

        token2 = (await Token2.deploy(
            "USDT TEST",
            "USDT",
        )) as StableCoin;
        await token2.deployed();

        currencyManager = await CurrencyManager.deploy();
        await currencyManager.deployed();
    });

    describe("Currency", function () {
        it("Add currency", async function () {
            expect(await currencyManager.viewCountWhitelistedCurrencies()).to.equal(0);
            const lists1 = await currencyManager.viewWhitelistedCurrencies(0, 0);
            expect(lists1[0].length).to.equal(0);
            expect(lists1[1]).to.equal(0);
            // expect(await currencyManager.viewWhitelistedCurrencies(0, 0)).to.equal([[], BigNumber.from(0)]);

            await expect(currencyManager.connect(owner).addCurrency(token1.address))
                .to.emit(currencyManager, currencyWhitelistedEvent)
                .withArgs(token1.address);
            expect(await currencyManager.isCurrencyWhitelisted(token1.address)).to.equal(true);
            expect(await currencyManager.isCurrencyWhitelisted(token2.address)).to.equal(false);
            expect(await currencyManager.viewCountWhitelistedCurrencies()).to.equal(1);
            const lists2 = await currencyManager.viewWhitelistedCurrencies(0, 1);
            expect(lists2[0].length).to.equal(1);
            expect(lists2[0][0]).to.equal(token1.address);
            expect(lists2[1]).to.equal(1);
        });

        it("Add duplicate currency", async function () {
            await currencyManager.connect(owner).addCurrency(token1.address);
            await expect(currencyManager.connect(owner).addCurrency(token1.address))
                .to.be.revertedWith("Currency: Already whitelisted.");
        });

        it("Remove currency", async function () {
            await currencyManager.connect(owner).addCurrency(token1.address);
            await currencyManager.connect(owner).addCurrency(token2.address);
            expect(await currencyManager.isCurrencyWhitelisted(token1.address)).to.equal(true);
            expect(await currencyManager.isCurrencyWhitelisted(token2.address)).to.equal(true);
            expect(await currencyManager.viewCountWhitelistedCurrencies()).to.equal(2);

            await expect(currencyManager.connect(owner).removeCurrency(token1.address))
                .to.emit(currencyManager, currencyRemovedEvent)
                .withArgs(token1.address);
            expect(await currencyManager.isCurrencyWhitelisted(token1.address)).to.equal(false);
            expect(await currencyManager.isCurrencyWhitelisted(token2.address)).to.equal(true);
            expect(await currencyManager.viewCountWhitelistedCurrencies()).to.equal(1);
            const lists = await currencyManager.viewWhitelistedCurrencies(0, 2);
            expect(lists[0].length).to.equal(1);
            expect(lists[0][0]).to.equal(token2.address);
            expect(lists[1]).to.equal(1);
        });

        it("Remove non-exist currency", async function () {
            await expect(currencyManager.connect(owner).removeCurrency(token1.address))
                .to.be.revertedWith("Currency: Not whitelisted.");
        });
    });
});