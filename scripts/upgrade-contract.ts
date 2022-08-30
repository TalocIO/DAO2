// samples to upgrade an existing deployed contract

//https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades 
const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2);
  console.log("Box upgraded");
}

//another example - https://docs.openzeppelin.com/upgrades-plugins/1.x/ 
const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);

main();


//another example - https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#deploy-proxy
async function upgradeProxy(
    proxyAddress: string,
    Contract: ethers.ContractFactory,
    opts?: {
      call?: string | { fn: string; args?: unknown[] },
      unsafeAllow?: ValidationError[],
      unsafeAllowRenames?: boolean,
      unsafeSkipStorageCheck?: boolean,
      constructorArgs?: unknown[],
      timeout?: number,
      pollingInterval?: number,
      useDeployedImplementation?: boolean,
      kind?: 'uups' | 'transparent',
    },
  ): Promise<ethers.Contract>