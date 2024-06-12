// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/**
Steps :- 
0 -> Make a contract called calculator
1 -> create result variable and store the value 
2 -> create functions to add, subtract and multiply to result
3 -> create a function and get the result
*/

contract Calculator {

    // creating a variable result to store the output
    uint256 result = 0;


    // function creation for add , and making it public visibility
    function add(uint256 num) public {
        result += num;
    }

    // creating subtract function with public visiblity
    function subtract(uint256 num) public {
        result -= num;
    }

    function multiply(uint256 num) public {
        result *= num;
    }

    function getResult() public view returns (uint256) {
        return result;
    }

}