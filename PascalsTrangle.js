/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

Algorthm:
1. create empty array
2. iterate n times where n is = to numRows
3. in each iteratation, will need to iterate n times where n is = to numRows[i]
4. define an empty array
5. if it is the first or last iteration push 1 to the array defined on step 4
6. else add, from the output array, n-1[n] and n-1[n+1]
7. repeat step 6
8. repeat 3 - 7 until finished
9. return output
*/

function generate(numRows) {
    let output = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if( j === 0 || j === i) {
                row.push(1);
            } else {
                let int = output[i-1][j-1] + output[i-1][j];
                row.push(int);
            }
        }
        output.push(row);
    }
    return output;
}

console.table(generate(5));