/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Alogorthm:
1. sort array
2. iterate through the array
3. if i is equal to i + 1 return false
4. otherwise, return true
*/

function containsDuplicate(nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {

            return true
        }
    }
    return false;
}

console.log(containsDuplicate([1,2,3,4]));

// // better answer using Set
// var containsDuplicate = function(nums) {
//     let set = new Set(nums);
//     return (set.size < nums.length);
// };