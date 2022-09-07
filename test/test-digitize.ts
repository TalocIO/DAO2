//sample of testing a "box" contract


import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("Box", function () {
  let box:Contract;

  beforeEach(async function () {
    const Box = await ethers.getContractFactory("Box")
    box = await Box.deploy()
    await box.deployed()
  })

  it("should retrieve value previously stored", async function () {
    await box.store(42)
    expect(await box.retrieve()).to.equal(BigNumber.from('42'))

    await box.store(100)
    expect(await box.retrieve()).to.equal(BigNumber.from('100'))
  })
})

// NOTE: should also add test for event: event ValueChanged(uint256 newValue)

//to run this test = yarn hardhat test test/test-digitize.ts

//results = 
//should retrieve value previously stored
//1 passing (505ms)
//  Done in 3.34s.
