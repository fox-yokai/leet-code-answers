/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

Algorthm:
1. Iterate through the array
2. create balance varible
3a. when ever there is an L decrease the balance variable
3b. when ever there is an R increase the balance variable
3c. if the balance variable is 0 increase the output by 1
4. return output
*/

function balancedSplitString (s){
    let output = 0;
    let balance = 0;
    for (let i = 0; i < s.length; i++){
    if (s[i] === 'L'){
        balance++
    } else {
        balance--
    }
    if (balance === 0){
        output++
    }
    }
    return output
}

console.log(balancedSplitString("RLRRLLRLRL"))