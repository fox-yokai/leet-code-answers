/*
Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

Algorthm:
1) Intake string
2) Remove all 0's
3) Return length
*/

function hammingWeight(n) {
    return n.toString().replace(/0/g, '').length;
}

console.log(hammingWeight(00000000000000000000000000001011))