/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Algorthm:
1. Take in the array
2. Split the array into 2 new arrays at n
3. combine the 2 new arrays
4. return the array
*/

function shuffle(nums, n){
    let arrFirstHalf = nums.slice(0, n);
    let arrSecondHalf = nums.slice(n, nums.length);
    let output = [];
    for (let i = 0; i < arrFirstHalf.length; i++) {
        output.push(arrFirstHalf[i]);
        output.push(arrSecondHalf[i]);
    }
    return output
};

console.log(shuffle([1,2,3,4,4,3,2,1], 4))