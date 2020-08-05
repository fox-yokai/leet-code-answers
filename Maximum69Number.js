/*
Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

Algorthm:
1.Iterate through the number
2. Change each number 6 -> 9 or 9 -> 6
2a. compare the number to the max and if it is higher max = new number
3. return max number
*/

function maximum69Number(num) {
    let numArr = (""+num).split("").map(Number);
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === 6) {
            numArr[i] = 9;
            break
        }
    }
    return numArr.join('')
};

console.log(maximum69Number(9669));