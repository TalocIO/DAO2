// https://dev.to/yakult/tutorial-write-upgradeable-smart-contract-proxy-contract-with-openzeppelin-1916


// unit test for box contract, before deploying

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
