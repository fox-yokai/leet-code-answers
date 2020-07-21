/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Algorthm:
1. split S into an array
2. iterate through the array
3. compare each item in the array to J
4. if it matches with J increase count
5. return count
*/

function numJewelsInStones(J, S){
    let stones = S.split('');
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (J.includes(S[i])){
            count++
        }
    }
    return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"))