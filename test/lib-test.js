const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("LibDemo", function(){
    let owner
    let demo

    beforeEach(async function(){
        [owner] = await ethers.getSigners()
        
        const LibDemo = await ethers.getContractFactory("LibDemo", owner)
        demo = await LibDemo.deploy()
        await demo.deployed()
    })
    it("should compare two strings",async function(){
        const result = await demo.runnerStr("cat","cat")
        expect(result).to.eq(true)

        const result2 = await demo.runnerStr("cat","dog")
        expect(result2).to.eq(false)
    })
    
    
    it("should find uints in arr",async function(){
        const res = await demo.runnerArr([1,2,3],2)
        expect(res).to.eq(true)

        const res2 = await demo.runnerArr([1,2,3],5)
        expect(res2).to.eq(false)
    })
})
