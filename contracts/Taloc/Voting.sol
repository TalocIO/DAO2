// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

contract voting() {

    constructor() {

    }; 

//if else logic needs to be refined , just sudo code 
//https://docs.soliditylang.org/en/latest/control-structures.html# 

    function init_vote () private returns() { 
        WHEN  {amount_raised}  from { Taloc_Bank } = "500,000"
THEN 
CREATE { purchase_ID }

AND COUNT
{ user_location }

FROM { KYC }

    }; 

    function voting_eligibility (bool _subscribed , string majority_location) private returns() {

    };

//will this be a function or event ? will be triggered by "voting_eligibility" function ^^ 
//and notify eligible members to vote. 
//how will members be notified ? A = discord, will need to integrate thier API with this function 

    function member_notify ( uint256 Purchase_ID , uint256 amount_raised,
    string _majority_location, uint256 voting_timelock) private returns() {

    }; 


//this function will need to be scheduled (timelock ? ) need a start and end time  

    function vote (uint256 voting_timelock, uint256 Purchase_ID) private returns() {

    };

    
}
