/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Algorthm:
1. iterate around the array
2. count each combination of arrays
3. return the highest count

*/

function maxSubarray(nums){
    let sum = nums[0],
        max = nums[0];
    for (let i = 1; i < nums.length; ++i)
        sum = Math.max(sum + nums[i], nums[i]),
        max = Math.max(max, sum);
    return max;
}

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]));

// function maxSubarrayReduce(nums){
//     return nums.reduce((acc, num) => )
// }