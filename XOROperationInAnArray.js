/*
Given an integer n and an integer start.

Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

Algorthm:
1. create array
2. 
*/

function xorOperation(n, start){
    let nums = [];
    let output = 0;
    for (let i = 0; i < n; i++) {
        let num = start + 2 * i
        nums.push(num)  
    }
    for (let j = 0; j < nums.length; j++) {
        output = output ^ nums[j];
    }
    return output
}

console.log(xorOperation(4, 3))