import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
import { ethers, upgrades, network } from "hardhat";
import { BigNumber } from "ethers";
import { Jackpot, Jackpot__factory, StableCoin, StableCoin__factory } from "../typechain";

use(solidity);

const ticketPrice = ethers.utils.parseEther("100");
const addOnPool = 30; // 30%

const jackpotRound0 = 0;
const jackpotRound1 = 1;
const jackpotId0 = 0;
const jackpotId1 = 1;
const jackpotId2 = 2;

const addTicketEvent = "AddTicket";
const closePoolEvent = "ClosePool";
const generateRandomEvent = "GenerateRandom";
const claimRewardEvent = "ClaimReward";

type JackpotResult = {
    jackpotId: BigNumber;
    ref: BigNumber;
    winnerId: BigNumber;
    reward: BigNumber;
    isClaimable: boolean;
}

describe("Jackpot", function () {
    let Token: StableCoin__factory;
    let token: StableCoin;
    let Jackpot: Jackpot__factory;
    let jackpot: Jackpot;
    let owner: SignerWithAddress;
    let worker: SignerWithAddress;
    let wallet: SignerWithAddress;
    let gachapong: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addr3: SignerWithAddress;
    let addrs: Array<SignerWithAddress>;

    function eth(num: number): BigNumber {
        return ethers.utils.parseEther(num.toString());
    };

    async function approveToken(acc: SignerWithAddress, token: StableCoin, amount: BigNumber) {
        await token.connect(acc).approve(jackpot.address, amount);
        expect(await token.allowance(acc.address, jackpot.address)).to.equal(amount);
    }

    before(async function () {
        [owner, worker, wallet, gachapong, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

        Token = await ethers.getContractFactory("StableCoin", owner);
        Jackpot = await ethers.getContractFactory("Jackpot", owner);
    });

    beforeEach(async function () {
        token = (await Token.deploy(
            "USDC TEST",
            "USDC"
        )) as StableCoin;
        await token.deployed();

        jackpot = (await upgrades.deployProxy(Jackpot, [
            wallet.address,
            token.address,
            ticketPrice,
            addOnPool
        ])) as Jackpot;
        await jackpot.deployed();

        // currency
        await expect(() =>
            token.connect(owner).transfer(addr1.address, eth(1000))
        ).to.changeTokenBalance(token, addr1, eth(1000));

        await expect(() =>
            token.connect(owner).transfer(addr2.address, eth(1000))
        ).to.changeTokenBalance(token, addr2, eth(1000));

        await expect(() =>
            token.connect(owner).transfer(addr3.address, eth(10))
        ).to.changeTokenBalance(token, addr3, eth(10));

        // wallet
        await expect(() =>
            token.connect(owner).transfer(wallet.address, eth(100000))
        ).to.changeTokenBalance(token, wallet, eth(100000));

        await approveToken(wallet, token, eth(100000));

        // add worker role
        const workerRole = await jackpot.WORKER_ROLE();
        await jackpot.connect(owner).grantRole(workerRole, worker.address);

        // add gachapong role
        const gachapongRole = await jackpot.GACHAPONG_ROLE();
        await jackpot.connect(owner).grantRole(gachapongRole, gachapong.address);
    });

    describe("Initialize", function () {
        it("Should set the right owner", async function () {
            expect(await jackpot.owner()).to.equal(owner.address);
        });

        it("Should set the right worker", async function () {
            const workerRole = await jackpot.WORKER_ROLE();
            expect(await jackpot.hasRole(workerRole, worker.address));
        });

        it("Should set the right token", async function () {
            expect(await jackpot.token()).to.equal(token.address);
        });

        it("Should set the right initial data", async function () {
            expect(await jackpot.ticketPrice()).to.equal(ticketPrice);
            expect(await jackpot.addOnPoolReward()).to.equal(addOnPool);
        });
    });

    describe("SetAddOnPoolReward", function () {
        it("Should be able to set addon pool reward", async function () {
            const newAddOnPool = 40; // 40%
            await jackpot.connect(owner).pause();
            await jackpot.connect(owner).setAddOnPoolReward(newAddOnPool);
            expect(await jackpot.addOnPoolReward()).to.equal(newAddOnPool);
        });
        it("Should be unable to set addon pool reward because of 0", async function () {
            const newAddOnPool = 0; // 0%
            await jackpot.connect(owner).pause();
            await expect(jackpot.connect(owner).setAddOnPoolReward(newAddOnPool))
                .to.be.revertedWith("Jackpot.sol: Must be > 0.");
        });
        it("Should be able to set addon pool reward because of not owner", async function () {
            const newAddOnPool = 40; // 40%
            await jackpot.connect(owner).pause();
            await expect(jackpot.connect(addr1).setAddOnPoolReward(newAddOnPool))
                .to.be.revertedWith("Ownable: caller is not the owner");
        });
    });

    describe("SetWallet", function () {
        it("Should be able to set wallet", async function () {
            await jackpot.connect(owner).pause();
            await jackpot.connect(owner).setWallet(addr1.address);
            expect(await jackpot.wallet()).to.equal(addr1.address);
        });

        it("Should be unable to set wallet because of address 0", async function () {
            await jackpot.connect(owner).pause();
            await expect(jackpot.connect(owner).setWallet(ethers.constants.AddressZero))
                .to.be.revertedWith("Jackpot.sol: Must be address.");
        });
    });

    describe("AddTicket", function () {
        it("Should be able to add ticket with equal ticket price", async function () {
            await expect(jackpot.connect(gachapong).addTicket(addr1.address, eth(100)))
                .to.emit(jackpot, addTicketEvent)
                .withArgs(addr1.address, jackpotId0);

            expect(await jackpot.currentJackpotRound()).to.equal(jackpotRound0);

            const result: JackpotResult = await jackpot.rounds(jackpotRound0);
            // console.log(result);
            expect(result.jackpotId).to.equal(jackpotId1);
            expect(result.reward).to.equal(eth(100).mul(30).div(100));

            // console.log(await jackpot.getTickets(addr1.address, jackpotRound0));
            expect((await jackpot.getTickets(addr1.address, jackpotRound0)).length).to.equal(1);
        });

        it("Should be able to add ticket with more 1 but no enough 2 ticket price", async function () {
            await expect(jackpot.connect(gachapong).addTicket(addr1.address, eth(150)))
                .to.emit(jackpot, addTicketEvent)
                .withArgs(addr1.address, jackpotId0);

            expect(await jackpot.currentJackpotRound()).to.equal(jackpotRound0);

            const result: JackpotResult = await jackpot.rounds(jackpotRound0);
            // console.log(result);
            expect(result.jackpotId).to.equal(jackpotId1);
            expect(result.reward).to.equal(eth(150).mul(30).div(100));

            // console.log(await jackpot.getTickets(addr1.address, jackpotRound0));
            expect((await jackpot.getTickets(addr1.address, jackpotRound0)).length).to.equal(1);
        });

        it("Should be able to add ticket with 2 ticket price", async function () {
            await expect(jackpot.connect(gachapong).addTicket(addr1.address, eth(200)))
                .to.emit(jackpot, addTicketEvent)
                .withArgs(addr1.address, jackpotId0)
                .to.emit(jackpot, addTicketEvent)
                .withArgs(addr1.address, jackpotId1);

            expect(await jackpot.currentJackpotRound()).to.equal(jackpotRound0);

            const result: JackpotResult = await jackpot.rounds(jackpotRound0);
            // console.log(result);
            expect(result.jackpotId).to.equal(jackpotId2);
            expect(result.reward).to.equal(eth(200).mul(30).div(100));

            // console.log(await jackpot.getTickets(addr1.address, jackpotRound0));
            expect((await jackpot.getTickets(addr1.address, jackpotRound0)).length).to.equal(2);
        });

        it("Should be able to add ticket with 1 ticket price 2 times", async function () {
            await expect(jackpot.connect(gachapong).addTicket(addr1.address, eth(100)))
                .to.emit(jackpot, addTicketEvent)
                .withArgs(addr1.address, jackpotId0);

            await jackpot.connect(gachapong).addTicket(addr2.address, eth(30));

            expect(await jackpot.currentJackpotRound()).to.equal(jackpotRound0);

            const result: JackpotResult = await jackpot.rounds(jackpotRound0);
            // console.log(result);
            expect(result.jackpotId).to.equal(jackpotId1);
            expect(result.reward).to.equal(eth(130).mul(30).div(100));

            // console.log(await jackpot.getTickets(addr1.address, jackpotRound0));
            expect((await jackpot.getTickets(addr1.address, jackpotRound0)).length).to.equal(1);
            expect((await jackpot.getTickets(addr2.address, jackpotRound0)).length).to.equal(0);
        });

        it("Should be unable to add ticket because of not gachapong role", async function () {
            await expect(jackpot.connect(addr1).addTicket(addr1.address, eth(100)))
                .to.be.reverted;
        });
    });

    describe("ClosePool", function () {
        it("Should be able to close pool", async function () {
            await jackpot.connect(gachapong).addTicket(addr1.address, eth(120));
            await jackpot.connect(gachapong).addTicket(addr2.address, eth(30));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await expect(jackpot.connect(worker).closePool(currentBlockNumber + 2))
                .to.emit(jackpot, closePoolEvent)
                .withArgs(jackpotRound0, currentBlockNumber + 2);

            expect(await jackpot.currentJackpotRound()).to.equal(jackpotRound1);

            const result: JackpotResult = await jackpot.rounds(jackpotRound0);
            // console.log(result);
            expect(result.jackpotId).to.equal(jackpotId1);
            expect(result.ref).to.equal(currentBlockNumber + 2);
        });

        it("Should be unable to close pool because of ref", async function () {
            await jackpot.connect(gachapong).addTicket(addr1.address, eth(120));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await expect(jackpot.connect(worker).closePool(currentBlockNumber))
                .to.be.revertedWith("Jackpot.sol: Invalid ref.");
        });
    });

    describe("GenerateRandom", function () {
        it("Should be able to generate random", async function () {
            await jackpot.connect(gachapong).addTicket(addr1.address, eth(120));
            await jackpot.connect(gachapong).addTicket(addr2.address, eth(30));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await jackpot.connect(worker).closePool(currentBlockNumber + 2);
            await network.provider.send("evm_mine");

            await expect(jackpot.connect(worker).generateRandom(jackpotRound0))
                .to.emit(jackpot, generateRandomEvent);

            const result: JackpotResult = await jackpot.rounds(jackpotRound0);
            expect(result.ref).to.equal(currentBlockNumber + 2);
            expect(result.isClaimable).to.equal(true);
        });

        it("Should be unable to generate random because of no ref", async function () {
            await expect(jackpot.connect(worker).generateRandom(jackpotRound0))
                .to.be.revertedWith("Jackpot.sol: Need ref.");
        });

        it("Should be unable to generate random because of not this time", async function () {
            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await jackpot.connect(worker).closePool(currentBlockNumber + 2);

            await expect(jackpot.connect(worker).generateRandom(jackpotRound0))
                .to.be.revertedWith("Jackpot.sol: Need more time.");
        });

        it("Should be unable to generate random because of already gen", async function () {
            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await jackpot.connect(worker).closePool(currentBlockNumber + 2);
            await network.provider.send("evm_mine");

            await jackpot.connect(worker).generateRandom(jackpotRound0);
            await expect(jackpot.connect(worker).generateRandom(jackpotRound0))
                .to.be.revertedWith("Jackpot.sol: Already gen.");
        });
    });

    describe("ClaimReward", function () {
        it("Should be able to claim reward", async function () {
            await jackpot.connect(gachapong).addTicket(addr1.address, eth(120));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await jackpot.connect(worker).closePool(currentBlockNumber + 2);
            await network.provider.send("evm_mine");

            await jackpot.connect(worker).generateRandom(jackpotRound0);

            await jackpot.connect(owner).setRandom(jackpotRound0, 0);

            expect(await jackpot.viewReward(jackpotRound0, addr1.address)).to.equal(eth(120 * 0.3));

            await expect(jackpot.connect(addr1).claimReward(jackpotRound0))
                .to.emit(jackpot, claimRewardEvent)
                .withArgs(jackpotRound0, addr1.address, eth(120 * 0.3));
            expect(await token.balanceOf(addr1.address)).to.equal(eth(1000).add(eth(120 * 0.3)));
            expect(await token.balanceOf(wallet.address)).to.equal(eth(100000).sub(eth(120 * 0.3)));
        });

        it("Should be unable to claim reward because of not this time", async function () {
            await expect(jackpot.connect(addr1).claimReward(jackpotRound0))
                .to.be.revertedWith("Jackpot.sol: Not claimable.");
        });

        it("Should be unable to claim reward because of not winner", async function () {
            await jackpot.connect(gachapong).addTicket(addr1.address, eth(120));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await jackpot.connect(worker).closePool(currentBlockNumber + 2);
            await network.provider.send("evm_mine");

            await jackpot.connect(worker).generateRandom(jackpotRound0);

            await jackpot.connect(owner).setRandom(jackpotRound0, 0);

            await expect(jackpot.connect(addr2).claimReward(jackpotRound0))
                .to.be.revertedWith("Jackpot.sol: No prize.");
        });

        it("Should be unable to claim reward because of already claim", async function () {
            await jackpot.connect(gachapong).addTicket(addr1.address, eth(120));

            const currentBlockNumber = await ethers.provider.getBlockNumber();
            await jackpot.connect(worker).closePool(currentBlockNumber + 2);
            await network.provider.send("evm_mine");

            await jackpot.connect(worker).generateRandom(jackpotRound0);

            await jackpot.connect(owner).setRandom(jackpotRound0, 0);

            await jackpot.connect(addr1).claimReward(jackpotRound0);
            await expect(jackpot.connect(addr1).claimReward(jackpotRound0))
                .to.be.revertedWith("Jackpot.sol: No prize.");
        });
    });
});
