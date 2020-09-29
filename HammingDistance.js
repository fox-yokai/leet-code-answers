/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.
*/

function hammingDistance(x, y) {
    return (x ^ y).toString(2).replace(/0/g, '').length;



};

console.log(hammingDistance(1, 4))