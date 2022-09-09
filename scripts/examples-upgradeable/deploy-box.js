//API - https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#deploy-proxy
////this deploy scripts are able to be executed using the open zepplin/ hardhat upgrades plugin


// https://docs.openzeppelin.com/learn/upgrading-smart-contracts#upgrading-a-contract-via-plugins


import { ethers } from "hardhat"
import { upgrades } from "hardhat"

const { ethers, upgrades } = require('hardhat');

async function main () {
  const Box = await ethers.getContractFactory('Box');
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  await box.deployed();
  console.log('Box deployed to:', box.address);
}

main();