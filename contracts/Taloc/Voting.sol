// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract voting is Initializable () {

    constructor() {
        _disableInitializers();

    }; 

     //use this initializer function instead of a constructor
    function initialize() initializer public  {

    };


        //if else logic needs to be refined , just sudo code 
        //https://docs.soliditylang.org/en/latest/control-structures.html# 

        function init_vote () private returns() { 
            WHEN  {amount_raised}  from { Taloc_Bank } = "500,000"
            THEN 
            CREATE { purchase_ID }

            AND COUNT
            { user_location }

            FROM { d_storage }

        }; 

        //will this be a function or event ? will be triggered by "voting_eligibility" function 
        //and notify eligible members to vote. 
        //how will members be notified ? A = discord, will need to integrate thier API with this function 

        function member_notify ( uint256 Purchase_ID , uint256 amount_raised,
        string _majority_location, uint256 voting_timelock) private returns() {

        };

        function voting_eligibility (bool _registration , string majority_location) private returns() {
            //during location count, will need to omit previous location winner, 
            //example: if last purchase was in LA, and LA is majority again, will need to go to second most city 

        };


        function member_vote () private returns() {

        };




        //this function will need to be scheduled (timelock ? ) need a start and end time 
        function vote (uint256 voting_timelock, uint256 Purchase_ID) private returns() {
         

        };


        function voters_decision (uint256 voting_timelock, uint256 Purchase_ID) private returns() {
        //will tally the votes and pass decision to purchase function 
        };
        
}
