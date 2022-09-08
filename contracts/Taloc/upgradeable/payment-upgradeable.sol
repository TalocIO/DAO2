// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract payment is Initializable () {

    constructor () { _disableInitializers(); 
    }

    //use this initializer function instead of a constructor
    function initialize() initializer public  {

      
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


