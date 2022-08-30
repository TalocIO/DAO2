// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

contract payment () {

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

function purchase_coin () {

};


//after every successful payment, should have a completion validator 
//will be passed to conversion function
function taloc_receive () {

};

function transfer_coin () {

};

//this function should be triggered after every successful payment. 
//when "taloc_recieve" is complete
function USD_conversion (uint256 USD_price, ) return(uint256) {
return ETH_price;
};

//when condition from USD _ conversion is met, then ETH needs to be liquidated from taloc wallet and transferred to taloc bank
function liquidation () {
    WHEN { ETH_price } from { Taloc_wallet } = "500,000"
THEN
{sell_coins}

};


}


