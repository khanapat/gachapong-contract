import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
import { ethers, upgrades, network } from "hardhat";
import { BigNumber } from "ethers";
import { CurrencyManager, CurrencyManager__factory, Gachapong, Gachapong__factory, Jackpot, Jackpot__factory, StableCoin, StableCoin__factory } from "../typechain";

use(solidity);

const ticketPrice = ethers.utils.parseEther("100");
const addOnPool = 30; // 30%

const twoDigitType = 0;
const threeDigitType = 1;

const lotteryRound0 = BigNumber.from("0");
const lotteryRound1 = BigNumber.from("1");
const lotteryId0 = BigNumber.from("0");
const lotteryId1 = BigNumber.from("1");

const twoDigitReward = 500; // 5 times
const threeDigitReward = 1200; // 12 times

const newCurrencyManagerEvent = "NewCurrencyManager";
const buyLotteryEvent = "BuyLottery";
const closeRoundEvent = "CloseRound";
const generateRandomEvent = "GenerateRandom";
const claimRewardEvent = "ClaimReward";

type Lottery = {
    lotteryRound: BigNumber;
    lotteryType: number;
    lotteryNumber: BigNumber;
    amount: BigNumber;
    currency: string;
    owner: string;
};

type LotteryResult = {
    twoDigitRef: BigNumber;
    threeDigitRef: BigNumber;
    twoDigitNumber: number;
    threeDigitNumber: number;
    isClaimable: boolean;
};

describe("Gachapong", function () {
    let Token: StableCoin__factory;
    let token1: StableCoin;
    let token2: StableCoin;
    let token3: StableCoin;
    let CurrencyManager: CurrencyManager__factory;
    let currencyManager: CurrencyManager;
    let Gachapong: Gachapong__factory;
    let gachapong: Gachapong;
    let Jackpot: Jackpot__factory;
    let jackpot: Jackpot;
    let owner: SignerWithAddress;
    let worker: SignerWithAddress;
    let wallet: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addr3: SignerWithAddress;
    let addrs: Array<SignerWithAddress>;

    function eth(num: number): BigNumber {
        return ethers.utils.parseEther(num.toString());
    };

    async function approveToken(acc: SignerWithAddress, token: StableCoin, amount: BigNumber) {
        await token.connect(acc).approve(gachapong.address, amount);
        expect(await token.allowance(acc.address, gachapong.address)).to.equal(amount);
    }

    before(async function () {
        [owner, worker, wallet, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

        Token = await ethers.getContractFactory("StableCoin", owner);
        CurrencyManager = await ethers.getContractFactory("CurrencyManager", owner);
        Jackpot = await ethers.getContractFactory("Jackpot", owner);
        Gachapong = await ethers.getContractFactory("Gachapong", owner);
    });

    beforeEach(async function () {
        token1 = (await Token.deploy(
            "USDC TEST",
            "USDC"
        )) as StableCoin;
        await token1.deployed();

        token2 = (await Token.deploy(
            "USDT TEST",
            "USDT"
        )) as StableCoin;
        await token2.deployed();

        token3 = (await Token.deploy(
            "UST TEST",
            "UST"
        )) as StableCoin;
        await token3.deployed();

        currencyManager = await CurrencyManager.deploy();
        await currencyManager.deployed();

        jackpot = (await upgrades.deployProxy(Jackpot, [
            wallet.address,
            token1.address,
            ticketPrice,
            addOnPool
        ])) as Jackpot;
        await jackpot.deployed();

        gachapong = (await upgrades.deployProxy(Gachapong, [
            wallet.address,
            currencyManager.address,
            jackpot.address,
            twoDigitReward,
            threeDigitReward
        ])) as Gachapong;
        await gachapong.deployed();

        // currency
        // token1
        await expect(() =>
            token1.connect(owner).transfer(addr1.address, eth(1000))
        ).to.changeTokenBalance(token1, addr1, eth(1000));

        await expect(() =>
            token1.connect(owner).transfer(addr2.address, eth(1000))
        ).to.changeTokenBalance(token1, addr2, eth(1000));

        await expect(() =>
            token1.connect(owner).transfer(addr3.address, eth(10))
        ).to.changeTokenBalance(token1, addr3, eth(10));

        // token2
        await expect(() =>
            token2.connect(owner).transfer(addr1.address, eth(1000))
        ).to.changeTokenBalance(token2, addr1, eth(1000));

        // token3
        await expect(() =>
            token3.connect(owner).transfer(addr1.address, eth(1000))
        ).to.changeTokenBalance(token3, addr1, eth(1000));

        // wallet
        await expect(() =>
            token1.connect(owner).transfer(wallet.address, eth(100000))
        ).to.changeTokenBalance(token1, wallet, eth(100000));

        await approveToken(wallet, token1, eth(100000));

        // add worker role
        const workerRole = await gachapong.WORKER_ROLE();
        await gachapong.connect(owner).grantRole(workerRole, worker.address);

        // add gachapong role
        const gachapongRole = await jackpot.GACHAPONG_ROLE();
        await jackpot.connect(owner).grantRole(gachapongRole, gachapong.address);

        // add token whitelist
        await currencyManager.connect(owner).addCurrency(token1.address);
        await currencyManager.connect(owner).addCurrency(token2.address);
    });

    describe("Initialize", function () {
        it("Should set the right owner", async function () {
            expect(await gachapong.owner()).to.equal(owner.address);
        });

        it("Should set the right worker", async function () {
            const workerRole = await gachapong.WORKER_ROLE();
            expect(await gachapong.hasRole(workerRole, worker.address));
        });

        it("Should set the right currency manager", async function () {
            expect(await gachapong.currencyManager()).to.equal(currencyManager.address);
        });

        it("Should set the right initial data", async function () {
            expect(await gachapong.twoDigitReward()).to.equal(twoDigitReward);
            expect(await gachapong.threeDigitReward()).to.equal(threeDigitReward);
            expect(await gachapong.wallet()).to.equal(wallet.address);
        });
    });

    describe("UpdateCurrencyManager", function () {
        it("Should be able to update currency manager", async function () {
            await gachapong.connect(owner).pause();
            await expect(gachapong.connect(owner).updateCurrencyManager(addr2.address))
                .to.emit(gachapong, newCurrencyManagerEvent)
                .withArgs(addr2.address);
        });

        it("Should be unable to update currency manager because of address 0", async function () {
            await gachapong.connect(owner).pause();
            await expect(gachapong.connect(owner).updateCurrencyManager(ethers.constants.AddressZero))
                .to.be.revertedWith("Gachapong.sol: Must be address.");
        });
    });

    describe("SetMultiplyReward", function () {
        it("Should be able to set multiply reward", async function () {
            const newTwoDigitReward = 600; // 6 times
            const newThreeDigitReward = 1300; // 13 times
            await gachapong.connect(owner).pause();
            await gachapong.connect(owner).setMultiplyReward(newTwoDigitReward, newThreeDigitReward);
            expect(await gachapong.twoDigitReward()).to.equal(newTwoDigitReward);
            expect(await gachapong.threeDigitReward()).to.equal(newThreeDigitReward);
        });

        it("Should be unable to set multiply reward because of 0", async function () {
            const newTwoDigitReward = 0; // 6 times
            const newThreeDigitReward = 0; // 13 times
            await gachapong.connect(owner).pause();
            await expect(gachapong.connect(owner).setMultiplyReward(newTwoDigitReward, newThreeDigitReward))
                .to.be.revertedWith("Gachapong.sol: Must be > 0.");
        });

        it("Should be unable to set multiply reward because of not owner", async function () {
            const newTwoDigitReward = 600; // 6 times
            const newThreeDigitReward = 1300; // 13 times
            await gachapong.connect(owner).pause();
            await expect(gachapong.connect(addr1).setMultiplyReward(newTwoDigitReward, newThreeDigitReward))
                .to.be.revertedWith("Ownable: caller is not the owner");
        });
    });

    describe("SetWallet", function () {
        it("Should be able to set wallet", async function () {
            await gachapong.connect(owner).pause();
            await gachapong.connect(owner).setWallet(addr1.address);
            expect(await gachapong.wallet()).to.equal(addr1.address);
        });

        it("Should be unable to set wallet because of address 0", async function () {
            await gachapong.connect(owner).pause();
            await expect(gachapong.connect(owner).setWallet(ethers.constants.AddressZero))
                .to.be.revertedWith("Gachapong.sol: Must be address.");
        });
    });

    describe("BuyLottery", function () {
        it("Should be able to buy lottery with 2 digit type", async function () {
            const number = 99;
            await approveToken(addr1, token1, eth(100));
            await expect(gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, eth(100)))
                .to.emit(gachapong, buyLotteryEvent)
                .withArgs(lotteryRound0, lotteryId0, addr1.address, twoDigitType, number, eth(100), token1.address);

            expect(await gachapong.currentLotteryId()).to.equal(lotteryId1);
            expect(await gachapong.currentLotteryRound()).to.equal(lotteryRound0);

            const lottery: Lottery = await gachapong.lotteries(lotteryId0);
            expect(lottery.lotteryRound).to.equal(lotteryRound0);
            expect(lottery.lotteryType).to.equal(twoDigitType);
            expect(lottery.lotteryNumber).to.equal(number);
            expect(lottery.amount).to.equal(eth(100));
            expect(lottery.currency).to.equal(token1.address);
            expect(lottery.owner).to.equal(addr1.address);

            expect((await gachapong.getLotteries(addr1.address, lotteryRound0)).length).to.equal(1);

            expect(await token1.balanceOf(addr1.address)).to.equal(eth(900));
            expect(await token1.balanceOf(wallet.address)).to.equal(eth(100));
        });

        it("Should be able to buy lottery with 3 digit type", async function () {
            const number = 999;
            await approveToken(addr1, token1, eth(100));
            await expect(gachapong.connect(addr1).buyLottery(token1.address, threeDigitType, number, eth(100)))
                .to.emit(gachapong, buyLotteryEvent)
                .withArgs(lotteryRound0, lotteryId0, addr1.address, threeDigitType, number, eth(100), token1.address);

            expect(await gachapong.currentLotteryId()).to.equal(lotteryId1);
            expect(await gachapong.currentLotteryRound()).to.equal(lotteryRound0);

            const lottery: Lottery = await gachapong.lotteries(lotteryId0);
            expect(lottery.lotteryRound).to.equal(lotteryRound0);
            expect(lottery.lotteryType).to.equal(threeDigitType);
            expect(lottery.lotteryNumber).to.equal(number);
            expect(lottery.amount).to.equal(eth(100));
            expect(lottery.currency).to.equal(token1.address);
            expect(lottery.owner).to.equal(addr1.address);

            expect((await gachapong.getLotteries(addr1.address, lotteryRound0)).length).to.equal(1);

            expect(await token1.balanceOf(addr1.address)).to.equal(eth(900));
            expect(await token1.balanceOf(wallet.address)).to.equal(eth(100));
        });

        it("Should be unable to buy lottery because of 0 amount", async function () {
            const number = 12;
            await approveToken(addr1, token1, eth(100));
            await expect(gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, 0))
                .to.be.revertedWith("Gachapong.sol: Minimum bet.");
        });

        it("Should be unable to buy lottery because of number out of range", async function () {
            const number1 = 123;
            await approveToken(addr1, token1, eth(100));
            await expect(gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number1, eth(100)))
                .to.be.revertedWith("Gachapong.sol: Out of range.");

            const number2 = 1234;
            await expect(gachapong.connect(addr1).buyLottery(token1.address, threeDigitType, number2, eth(100)))
                .to.be.revertedWith("Gachapong.sol: Out of range.");
        });

        it("Should be unable to buy lottery because of toke not whitelisted", async function () {
            const number = 12;
            await approveToken(addr1, token3, eth(100));
            await expect(gachapong.connect(addr1).buyLottery(token3.address, twoDigitType, number, eth(100)))
                .to.be.revertedWith("Gachapong.sol: Not whitelisted.");
        });
    });

    describe("CloseRound", function () {
        it("Should be able to close round", async function () {
            const number = 99;
            await approveToken(addr1, token1, eth(100));
            await gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, eth(100));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            // console.log(currentBlockNumber);
            await expect(gachapong.connect(worker).closeRound(currentBlockNumber + 2, currentBlockNumber + 3))
                .to.emit(gachapong, closeRoundEvent)
                .withArgs(lotteryRound0, currentBlockNumber + 2, currentBlockNumber + 3);

            expect(await gachapong.currentLotteryRound()).to.equal(lotteryRound1);

            const result: LotteryResult = await gachapong.rounds(lotteryRound0);
            // console.log(result);
            expect(result.twoDigitRef).to.equal(currentBlockNumber + 2);
            expect(result.threeDigitRef).to.equal(currentBlockNumber + 3);

            // const blockNumber = await ethers.provider.getBlockNumber();
            // console.log(blockNumber);
            // const blockInfo = await ethers.provider.getBlock(blockNumber);
            // console.log(blockInfo.hash);

            // const blockInfo2 = await ethers.provider.getBlock(blockNumber + 1);
            // console.log(blockInfo2);
        });

        it("Should be unable to close round because of ref", async function () {
            const number = 99;
            await approveToken(addr1, token1, eth(100));
            await gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, eth(100));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await expect(gachapong.connect(worker).closeRound(currentBlockNumber, currentBlockNumber))
                .to.be.revertedWith("Gachapong.sol: Invalid ref.");

            await expect(gachapong.connect(worker).closeRound(currentBlockNumber - 1, currentBlockNumber - 2))
                .to.be.revertedWith("Gachapong.sol: Invalid ref.");
        });
    });

    describe("GenerateRandom", function () {
        it("Should be able to generate random", async function () {
            const number = 99;
            await approveToken(addr1, token1, eth(100));
            await gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, eth(100));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await gachapong.connect(worker).closeRound(currentBlockNumber + 2, currentBlockNumber + 3);
            await network.provider.send("evm_mine");
            await network.provider.send("evm_mine");

            await expect(gachapong.connect(worker).generateRandom(lotteryRound0))
                .to.emit(gachapong, generateRandomEvent);

            const result: LotteryResult = await gachapong.rounds(lotteryRound0);
            // console.log(result);
            expect(result.twoDigitRef).to.equal(currentBlockNumber + 2);
            expect(result.threeDigitRef).to.equal(currentBlockNumber + 3);
            expect(result.isClaimable).to.equal(true);

            // console.log(result.twoDigitNumber, result.threeDigitNumber);
            // console.log(currentBlockNumber);
            // console.log(await ethers.provider.getBlockNumber());

            // const blockInfo2 = await ethers.provider.getBlock(12);
            // console.log(blockInfo2.hash);

            // const blockInfo3 = await ethers.provider.getBlock(13);
            // console.log(blockInfo3.hash);
        });

        it("Should be unable to generate random because of no ref", async function () {
            await expect(gachapong.connect(worker).generateRandom(lotteryRound0))
                .to.be.revertedWith("Gachapong.sol: Need ref.");
        });

        it("Should be unable to generate random because of not this time", async function () {
            const number = 99;
            await approveToken(addr1, token1, eth(100));
            await gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, eth(100));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await gachapong.connect(worker).closeRound(currentBlockNumber + 2, currentBlockNumber + 3);

            await expect(gachapong.connect(worker).generateRandom(lotteryRound0))
                .to.be.revertedWith("Gachapong.sol: Need more time.");
        });

        it("Should be unable to generate random because of already gen", async function () {
            const number = 99;
            await approveToken(addr1, token1, eth(100));
            await gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, eth(100));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await gachapong.connect(worker).closeRound(currentBlockNumber + 2, currentBlockNumber + 3);
            await network.provider.send("evm_mine");
            await network.provider.send("evm_mine");

            await gachapong.connect(worker).generateRandom(lotteryRound0);
            await expect(gachapong.connect(worker).generateRandom(lotteryRound0))
                .to.be.revertedWith("Gachapong.sol: Already gen.");
        });
    });

    describe("ClaimReward", function () {
        it("Should be able to claim reward", async function () {
            const number = 99;
            await approveToken(addr1, token1, eth(100));
            await gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, eth(100));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await gachapong.connect(worker).closeRound(currentBlockNumber + 2, currentBlockNumber + 3);
            await network.provider.send("evm_mine");
            await network.provider.send("evm_mine");

            await gachapong.connect(worker).generateRandom(lotteryRound0);

            await gachapong.connect(owner).setRandom(lotteryRound0, 99, 123);

            await expect(gachapong.connect(addr1).claimReward(lotteryId0))
                .to.emit(gachapong, claimRewardEvent)
                .withArgs(lotteryRound0, lotteryId0, addr1.address, eth(100).mul(twoDigitReward / 100), token1.address);
            expect(await token1.balanceOf(addr1.address)).to.equal(eth(1000).sub(eth(100)).add(eth(100).mul(twoDigitReward / 100)));
            expect(await token1.balanceOf(wallet.address)).to.equal(eth(100000).add(eth(100)).sub(eth(100).mul(twoDigitReward / 100)));
        });

        it("Should be unable to claim reward because of not this time", async function () {
            await expect(gachapong.connect(addr1).claimReward(lotteryId0))
                .to.be.revertedWith("Gachapong.sol: Not claimable.");
        });

        it("Should be unable to claim reward because of not owner", async function () {
            const number = 99;
            await approveToken(addr1, token1, eth(100));
            await gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, eth(100));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await gachapong.connect(worker).closeRound(currentBlockNumber + 2, currentBlockNumber + 3);
            await network.provider.send("evm_mine");
            await network.provider.send("evm_mine");

            await gachapong.connect(worker).generateRandom(lotteryRound0);

            await gachapong.connect(owner).setRandom(lotteryRound0, 99, 123);

            await expect(gachapong.connect(addr2).claimReward(lotteryId0))
                .to.be.revertedWith("Gachapong.sol: Not owner.");
        });

        it("Should be unable to claim reward because of not owner", async function () {
            const number = 99;
            await approveToken(addr1, token1, eth(100));
            await gachapong.connect(addr1).buyLottery(token1.address, twoDigitType, number, eth(100));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await gachapong.connect(worker).closeRound(currentBlockNumber + 2, currentBlockNumber + 3);
            await network.provider.send("evm_mine");
            await network.provider.send("evm_mine");

            await gachapong.connect(worker).generateRandom(lotteryRound0);

            await gachapong.connect(owner).setRandom(lotteryRound0, 12, 123);

            await expect(gachapong.connect(addr1).claimReward(lotteryId0))
                .to.be.revertedWith("Gachapong.sol: No prize.");
        });
    });
});
