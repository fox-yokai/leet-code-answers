/*
Given an array nums of integers, return how many of them contain an even number of digits.

Algorthm:
1. Iterate through the array
2. Find the length of each num
3. If the num % 2 === 0 increase output + 1
4. Return output
*/

function findNumbers(nums){
    let output = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i].toString().length % 2 === 0){
            output++
        }
    }
    return output
}

console.log(findNumbers([12,345,2,6,7896]))