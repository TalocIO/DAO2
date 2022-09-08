// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract digitize is Initializable () {


    constructor () { _disableInitializers(); 
    }

     //use this initializer function instead of a constructor, #initializer ensures contract does not get initialized multiple times,
    function initialize() initializer public  {

    }


}