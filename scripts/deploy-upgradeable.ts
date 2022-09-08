//samples for deploying an upgradebale contract called box
//these deploy scripts are able to be executed using the open zepplin/upgrades plugin 


// sample 1 - https://docs.openzeppelin.com/learn/upgrading-smart-contracts#upgrading-a-contract-via-plugins 
const { ethers, upgrades } = require('hardhat');

async function main () {
  const Box = await ethers.getContractFactory('Box');
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  await box.deployed();
  console.log('Box deployed to:', box.address);
}

main();

//sample 2 - https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#deploy-proxy
async function deployProxy(
    Contract: ethers.ContractFactory,
    args: unknown[] = [],
    opts?: {
      initializer?: string | false,
      unsafeAllow?: ValidationError[],
      constructorArgs?: unknown[],
      timeout?: number,
      pollingInterval?: number,
      useDeployedImplementation?: boolean,
      kind?: 'uups' | 'transparent',
    },
  ): Promise<ethers.Contract>



  //sample 3 - https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades#proxies 
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [42]);
  await box.deployed();
  console.log("Box deployed to:", box.address);
}

main();


//sample 4 - https://dev.to/yakult/tutorial-write-upgradeable-smart-contract-proxy-contract-with-openzeppelin-1916 
import { ethers } from "hardhat"
import { upgrades } from "hardhat"

async function main() {

  const Box = await ethers.getContractFactory("Box")
  console.log("Deploying Box...")
  const box = await upgrades.deployProxy(Box,[42], { initializer: 'store' })

  console.log(box.address," box(proxy) address")
  console.log(await upgrades.erc1967.getImplementationAddress(box.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(box.address)," getAdminAddress")    
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})


//https://github.com/OpenZeppelin/openzeppelin-upgrades 
const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const Box = await ethers.getContractFactory("Box");
  const instance = await upgrades.deployProxy(Box, [42]);
  await instance.deployed();

  // Upgrading
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
}

main();
