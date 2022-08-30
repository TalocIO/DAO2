// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

contract voting() {

    constructor() {

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





    function vote (uint256 voting_timelock, uint256 Purchase_ID) private returns() {
//this function will need to be scheduled (timelock ? ) need a start and end time  

    };


    function voters_decision (uint256 voting_timelock, uint256 Purchase_ID) private returns() {
    //will tally the votes and pass decision to purchase function 
    };
    
}
