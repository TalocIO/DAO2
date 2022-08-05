// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

contract voting() {

    constructor() {

    }; 

    function init_vote () { 

    }; 

    function voting_eligibility (bool _subscribed , string majority_location) {

    };

//will this be a function or event ? will be triggered by "voting_eligibility" function ^^ 
//and notify eligible members to vote. 
//how will members be notified ? A = discord, will need to integrate thier API with this function 

    function member_notify ( uint256 Purchase_ID , uint256 amount_raised,
    string _majority_location, uint256 voting_timelock) {

    }; 


//this function will need to be scheduled (timelock ? ) 

    function vote () {

    };

    
}
