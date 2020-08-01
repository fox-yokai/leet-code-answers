/*
Given two lists Aand B, and B is an anagram of A. B is an anagram of A means B is made by randomizing the order of the elements in A.

We want to find an index mapping P, from A to B. A mapping P[i] = j means the ith element in A appears in B at index j.

These lists A and B may contain duplicates. If there are multiple answers, output any of them.

Algorthm:
1. Declare an empty array
2. Iterate around A
3. Iterate around b
4. If a[i] is = to b[j] push j to array
5. return array
*/

function anagramMappings(A, B) {
    let P = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                P.push(j);
                break
            }
            
        }
    }
    return P;
}

console.log(anagramMappings([40, 40],[40, 40]))