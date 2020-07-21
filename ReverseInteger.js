/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Algorthm:
1. determine if the number is negative
2. split the number into an array of strings
3. reverse the array of strings
4. join the array of strings
5. if negative, convert to negative number
6. return number
*/

function reverseInteger(x){

    let reverseX = +String(Math.abs(x)).split('').reverse().join('')
    if (reverseX > 0x7FFFFFFF) {
        return 0;
    }
    return x < 0 ? -reverseX : reverseX

}

console.log(reverseInteger([-123]))