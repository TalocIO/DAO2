//https://hardhat.org/hardhat-runner/docs/config 
/** @type import('hardhat/config').HardhatUserConfig */

import "@nomiclabs/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-etherscan';
import '@openzeppelin/contracts-upgradeable'


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
      //to use HD Wallet with Hardhat you should set your network's accounts field
      // to an object with the following fields
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      allowUnlimitedContractSize: true
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    scripts: "./scripts",
    app: "./my-app",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}


