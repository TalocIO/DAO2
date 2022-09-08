// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract proposal is Initializable () {

constructor () { _disableInitializers();
}

 //use this initializer function instead of a constructor
function initialize() initializer public  {
    
  
};


function member_proposal () {
        //this will be triggered by a member submiting a proposal, where propsal = purchase price 
        //example: if someone wants to buy the home they seen on taloc app for 200k, they submit a proposal and offer 50k, they will need 150k from other members for the "purchase function" to be called 
    };

}