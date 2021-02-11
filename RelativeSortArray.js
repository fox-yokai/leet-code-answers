/* 
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

Algorithm:
1) Iterate around arr2
2) for each arr2[i] find how many in arr1
3) push arr2[1] to output for how many in arr1
4) remove arr2[1] from arr1
5) once iterate around arr2 is finished, sort remaining items in arr2 and push to output
6) return output 
*/

function relativeSortArray(arr1, arr2) {
    let output = [];
    arr1.sort((a, b) => a - b);
    for (let i = 0; i < arr2.length; i++) {
        for (let k = 0; k < arr1.length; k++) {
            if (arr2[i] === arr1[k]) {
                output.push(arr2[i])
            }
        }
    }
    let filtered = arr1.filter(num => !arr2.includes(num))
    output.push(...filtered)
    return output;
}

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))