import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { Gachapong, Gachapong__factory, StableCoin, StableCoin__factory } from "../typechain";

use(solidity);

describe("Gachapong", function () {
    let Token: StableCoin__factory;
    let token: StableCoin;
    let Gachapong: Gachapong__factory;
    let gachapong: Gachapong;
    let owner: SignerWithAddress;
    let worker: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addr3: SignerWithAddress;
    let addrs: Array<SignerWithAddress>;

    function ETH(num: number): BigNumber {
        return ethers.utils.parseEther(num.toString());
    }

    before(async function () {
        [owner, worker, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

        Token = await ethers.getContractFactory("StableCoin", owner);
        Gachapong = await ethers.getContractFactory("Gachapong", owner);
    });

    beforeEach(async function () {
        token = await Token.deploy(
            "USDC TEST",
            "USDC"
        );
        await token.deployed();

        gachapong = await Gachapong.deploy();
        await gachapong.deployed();

        // currency
        await expect(() =>
            token.connect(owner).transfer(addr1.address, ETH(1000))
        ).to.changeTokenBalance(token, addr1, ETH(1000));

        await expect(() =>
            token.connect(owner).transfer(addr2.address, ETH(1000))
        ).to.changeTokenBalance(token, addr2, ETH(1000));

        await expect(() =>
            token.connect(owner).transfer(addr3.address, ETH(10))
        ).to.changeTokenBalance(token, addr3, ETH(10));
    });

    describe("Initialize", function () {
        it("", async function () {
            await gachapong.connect(addr1).buyLottery(99, ETH(1));
        });
    });
});
