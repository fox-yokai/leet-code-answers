/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Algorthm:
1. remove characters from the string and set string to all lower case
2. create new string which is the reverse of the previous string
3. compare strings and if they are === return true, otherwise return false
*/

function isPalindrome(s) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    s = s.replace(/ /g, "").toLowerCase().replace(regex, '');
    let revStr = s.split('').reverse().join('');
    if (s === revStr) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));