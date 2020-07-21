/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

Algorthm:
1. Iterate through the array and count the number of 0's
2. Remove the 0's
3. push the number of 0's = to count
4. return output
*/

function moveZeroes(nums){
    let count = 0;
    nums.forEach(num => {
        if (num === 0){
            count++
        }
    });
    nums = nums.filter(word => word > 0)
    for (let i = 0; i < count; i++) {
        nums.push(0)
    }
    return nums;
}

// console.log(moveZeroes([0,1,0,3,12]))

function mvZeroes(nums){
    let numLength = nums.length;
    nums = nums.filter(num => num > 0)
    let numZeroes = numLength - nums.length;
    for (let i = 0; i < numZeroes; i++) {
        nums.push(0)
    };
    return nums
}

console.log(mvZeroes1([0,0,0,1]))

function mvZeroes1(nums){
    for (let i = 0, n = nums.length; i < n;) {
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0);
            i = Math.max(i-1, 0);
            n-=1;
        } else {
            i++
        }
    }
    return nums
}