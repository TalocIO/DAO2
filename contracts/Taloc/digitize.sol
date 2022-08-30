// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

contract digitize () {


constructor () {

};

    //upgradebale 
     uint256 private value;

    // upgradebale - Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // upgradebale - Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    };

    // upgradebale  - Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    };

}