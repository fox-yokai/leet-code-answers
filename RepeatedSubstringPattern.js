/* 
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Algorthm:
1) Iterate around the string
2a) Start with first two letters, slice these from the string
2b) see if these two letters are included in the remaining string
3) repeat step 2 with an additional letter until half of the letters are used
4) if no subsets of the string are found, return false
*/

function repeatedSubstringPattern(s) {
    if (s.length <= 1) {
        return false
    }

    for(let i=1; i <= s.length/2; i++)
        if(s.substr(0, i).repeat(s.length/i) === s) return true;

    return false;
};

console.log(repeatedSubstringPattern("abab"));