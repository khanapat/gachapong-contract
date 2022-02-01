// const addOnPool = 30; // 30%


// describe("SetAddOnPoolReward", function () {
//     it("Should be able to set addon pool reward", async function () {
//         const newAddOnPool = 40; // 40%
//         await gachapong.connect(owner).pause();
//         await gachapong.connect(owner).setAddOnPoolReward(newAddOnPool);
//         expect(await gachapong.addOnPoolReward()).to.equal(newAddOnPool);
//     });

//     it("Should be unable to set addon pool reward because of 0", async function () {
//         const newAddOnPool = 0; // 0%
//         await gachapong.connect(owner).pause();
//         await expect(gachapong.connect(owner).setAddOnPoolReward(newAddOnPool))
//             .to.be.revertedWith("Gachapong.sol: Must be > 0.");
//     });

//     it("Should be able to set addon pool reward because of not owner", async function () {
//         const newAddOnPool = 40; // 40%
//         await gachapong.connect(owner).pause();
//         await expect(gachapong.connect(addr1).setAddOnPoolReward(newAddOnPool))
//             .to.be.revertedWith("Ownable: caller is not the owner");
//     });
// });