/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Algorithm:
1. intake the array
2. iterate around the array
3. push to a new array the running sum
4. return the array
*/

function runningSum(nums){
    let output = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        output.push(sum);
        
    }
    return output
}

console.log(runningSum([3,1,2,10,1]))