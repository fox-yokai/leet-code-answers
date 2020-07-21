/*
There is a special keyboard with all keys in a single row.

Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

Algorthm:
1. transform work into an array
2. iterate around the array
3. calculate the difference between the starting position (0) and the first letter
3a. add the difference to the total time
3b. change the current position to the position of the letter
4. repeat step 3 until word is finished
5. return total time
*/

function calculateTime(keyboard, word){
    let totalTime = 0;
    let currentPosition = 0;
    for (let i = 0; i < word.length; i++) {
        totalTime = totalTime + Math.abs(keyboard.indexOf(word[i]) - currentPosition);
        currentPosition = keyboard.indexOf(word[i])
    }
    return totalTime
}

console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode"))