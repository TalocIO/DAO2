// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
//https://levelup.gitconnected.com/minting-your-own-erc-20-tokens-in-ethereum-a477bd38c135 

contract MyToken is ERC20 {
    uint256 public unitsOneEthCanBuy  = 10;
    address public tokenOwner;         // the owner of the token
    // constructor will only be invoked during contract 
    // deployment time
    constructor(string memory name, string memory symbol) 
    ERC20(name, symbol) {
        tokenOwner = msg.sender;       // address of the token owner        
        uint256 n = 1000;
        // mint the tokens
        _mint(msg.sender, n * 10**uint(decimals()));        
    }
    // this function is called when someone sends ether to the 
    // token contract
    receive() external payable {        
        // msg.value (in Wei) is the ether sent to the 
        // token contract
        // msg.sender is the account that sends the ether to the 
        // token contract
        // amount is the token bought by the sender
        uint256 amount = msg.value * unitsOneEthCanBuy;
        // ensure you have enough tokens to sell
        require(balanceOf(tokenOwner) >= amount, 
            "Not enough tokens");
        // transfer the token to the buyer
        _transfer(tokenOwner, msg.sender, amount);
        // emit an event to inform of the transfer        
        emit Transfer(tokenOwner, msg.sender, amount);
        
        // send the ether earned to the token owner
        payable(tokenOwner).transfer(msg.value);
    }

    //In the token contract, you will define the price of your token. 
    //Here, we define that 1 Ether can buy 10 tokens:

    uint256 public unitsOneEthCanBuy  = 10;

   

}
