//samples for testing an upgradeable contract 


//sample 1 - https://docs.openzeppelin.com/upgrades-plugins/1.x/#test-usage 
it('works before and after upgrading', async function () {
    const instance = await upgrades.deployProxy(Box, [42]);
    assert.strictEqual(await instance.retrieve(), 42);
  
    await upgrades.upgradeProxy(instance.address, BoxV2);
    assert.strictEqual(await instance.retrieve(), 42);
  });



  //sample 2 - 
const { expect } = require("chai");

describe("Box", function() {
  it('works', async () => {
    const Box = await ethers.getContractFactory("Box");
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    const instance = await upgrades.deployProxy(Box, [42]);
    const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);

    const value = await upgraded.value();
    expect(value.toString()).to.equal('42');
  });
});


//sample 3 - https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades#proxies-tests 
const { expect } = require("chai");

describe("Box", function() {
  it('works', async () => {
    const Box = await ethers.getContractFactory("Box");
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    const instance = await upgrades.deployProxy(Box, [42]);
    const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);

    const value = await upgraded.value();
    expect(value.toString()).to.equal('42');
  });
});