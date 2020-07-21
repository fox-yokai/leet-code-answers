/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Algorthm:
1. take in the array as nums
2. iterate around the array
2a. compare each number to the other numbers
2b. for ever number that is smaller increase the count
2c. push count into output array
3. return output
*/

function smallerNumbersThanCurrent(num){
    let output = [];
    for (let i = 0; i < num.length; i++) {
        let count = 0;
        for (let j = 0; j < num.length; j++) {
            if (num[i] > num[j]) {
                count++
            }
        }
        output.push(count)
    }
    return output;
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));


var smallerNumbersThanCurrent2 = function(nums) {
    let results = []
    nums.map(num => {
        let nthTime = 0
        for (let j = 0; j < nums.length; j++) {
            if (num !== nums[j] && num > nums[j]) {
                nthTime ++
            }
        }
         results.push(nthTime)
    })
   return results
};