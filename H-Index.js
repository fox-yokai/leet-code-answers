/*
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

Algorthm:
1) Iterate through the array
2a) for each, determine if that citation is greater than or equal to as many citations equal to itsef
2b) and if the remaining numbers are less than the current citation
3) if it passes step two and it is the greatest value for the h-index, set it as the h-index
4) return the h-index
*/

function hIndex(citations) {
    let hIndex = 0;
    citations = citations.sort((a, b) => b - a)
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i+1) {
            hIndex = i+1
        } else {
            break
        }
        
    }
    return hIndex;
}

console.log(hIndex([3,0,6,1,5]));