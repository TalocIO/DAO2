// SPDX-License-Identifier: MIT
//https://www.quicknode.com/guides/web3-sdks/how-to-integrate-ipfs-with-ethereum 

pragma solidity ^0.8.3;
contract IPFS {
    string ipfsHash;
    
    function sendHash(string memory x) public {
        ipfsHash = x;
    }
    
    function getHash() public view returns (string memory) {
        return ipfsHash;
    }
}