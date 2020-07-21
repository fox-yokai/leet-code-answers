/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

Algorthm:
1. take in the array
2. iterate around the array
3. decompress the freq, val pair
4. concate decompresssed numbers to output
5. return output
*/

function decompressRLElist(nums){
    let output = [];
    for (let i = 0; i < nums.length; i = i + 2) {
        let freq = nums[i];
        let val = nums[i+1];
        for (let j = 0; j < freq; j++) {
            output.push(val);
        }
    }
    return output
}

console.log(decompressRLElist([1,2,3,4]))