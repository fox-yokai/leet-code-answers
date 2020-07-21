/*
Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

 

Example 1:

Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: "aeiou"
Output: ""

Alogorithm:
1. take the in the string
2. remove all vowels using replace
3. return the new string
*/

function removeVowels(s){
    var res = s.replace(/[aeiou]/g, "")
    return res;
}

console.log(removeVowels("leetcodeisacommunityforcoders"))