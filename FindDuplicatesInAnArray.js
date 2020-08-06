/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?
*/

function findDuplicates(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let dupNums = [];
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === sortedNums[i + 1]){
            dupNums.push(sortedNums[i]);
        }
        
    }
    return dupNums
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]));


// // this works but timed out on leetcode
// return nums.reduce((acc,currentValue,index, array) => {
//     if(array.indexOf(currentValue)!=index && !acc.includes(currentValue)) acc.push(currentValue);
//     return acc;
//   }, []);

