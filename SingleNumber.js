/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

Algorithm:
1. iterate around the array
2. check the current integer against the other integers
2a. if it doesn't match any of the integers, return current integer
2b. if it does match, repeat step
*/

function singleNumber(nums){
    return nums.reduce((prev, curr) => prev ^ curr, 0);
}

console.log(singleNumber([4,1,2,1,2]));