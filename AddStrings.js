/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

Algorthm:
1. convert num1 and num2 to numbers
2. add the numbers
3. convert this new number into a string
4. return the new number as a string
*/

function addStrings(num1, num2){
    let str = BigInt(num1) + BigInt(num2)
    return str.toString()
}