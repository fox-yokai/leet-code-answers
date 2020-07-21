/*
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

Algorthm:
1. create target array
2. iterate around the index
3. insert the num[i] into the correct position in the target array
4. return the target array
*/

function createTargetArray(nums, index){
    let output = [];
    for (let i = 0; i < index.length; i++) {
        output.splice(index[i], 0, nums[i])
    }
    return output;
}

console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0]));