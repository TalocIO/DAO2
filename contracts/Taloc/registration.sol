// SPDX-License-Identifier: MIT

//need to import KYC oracle here

d_storage = 'conenction' 

pragma solidity ^0.7.3;

contract registration () { 


        constructor() {

    }; 

    function create_member () returns (bool member_created) {
        uint256 member_ID = ;
        address wallet_address = ;
        string KYC_status = ["pending", "approved", "declined"];
        struct user_location = [string state = "CA" , uint256 zip_code = "91342"];
        string member_status = ["pending", "approved", "declined"];
        bool member_registered = ["true", "false"];
        bool member_created = ["true", "false"] ;


//will be listening for event on the FE, when user clicks "join" button 
//will create a "member" struct and auto generate a member_ID - with the following: 

    struct member [ member_ID, wallet_address, KYC_status = 'pending' , member_status = 'pending', 
    member_registered = false, user_location [state, zip_code]]

    return member_created; }; 
    


    function location_validator (string user_location) pure returns (bool memory location_validated) {
        bool location_validated = ["true", "false"];
        struct user_location = ["state", "zip_code"]

        //listening for event "KYC_status' updated from 'pending' to 'approved'
        event.listening ()

        index 'user_location' FROM 'd_storage'  for a match against 'accpeted_locations'  

        if 'user_location' = 'accepeted_location' 
            then location_validated = true
            else location_validated = false;

        return location_validated; 

            
            if location_validated = true 
                 then write to 'd_storage' update 'match' = YES
                 else };




    function acceptance (string KYC_status, bool location_validated) private 
        returns(bool member_approved) {
            bool member_approved =  ["true", "false"];

            //listening for event, what triggers this ? 
             event.listening ()

        return member_approved ;
        
            if member_approved = true 
            then write to 'd_storage' update 'member_status' = approved
            else  ; }; 




    function registration ( bool discord_reg, address wallet_address, bool member_approved ) private 
        returns(bool registration_complete)  { 
            bool registration_complete = ["true", "false"];

            //listening for event, what triggers this ? 
             event.listening ()

            return registration_complete ;

                 if registration_comeplete = true 
                 then write to 'd_storage' update 'member_registered' = true
                 else ; };

};

