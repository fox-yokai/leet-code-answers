/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Algorthm:
1. create variable = to reverse of x
2. compare x to reverseX
2a. if x === reverseX return true
2b. else return false
*/

function isPalindrome(x){
    let reverseX = x.toString().split('').reverse().join('')
    return (reverseX == x) ? true : false
}

console.log(isPalindrome(121))