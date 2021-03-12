/* 
Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.

Algorthm:
1) intake nums array
2) iterate around nums array
3) take the sum of nums[i] and nums[i + 1]
3a) if sum is less than k and greater than output
3b) sum = output
4) repeat step 3 for all numbers in nums array
5) return output
*/

function twoSumLessThanK(nums, k) {
    let output = -1;
    for (let i = 0; i < nums.length; i++) {
        for (let l = i + 1; l < nums.length; l++) {
            let sum = nums[i] + nums[l];
            if (sum < k && sum > output) {
               output = sum;
            }
        }
    }
    return output;
}

console.log(twoSumLessThanK([34,23,1,24,75,33,54,8], 60));