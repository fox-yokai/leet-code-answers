/* 
Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

Algorithm:
1) Create new array that onconsists of the heights array that has been sorted array from lowest to highest. This is target array.
2) Iterate through heights array to compare each position to the position in the target array
3) If the values differ, add 1 to the output
4) Return output
*/

function heightChecker(heights) {
    const targetHeights = [...heights].sort((a, b) => a - b);
    let output = 0;
    for(i = 0; i < heights.length; i++) {
        if (heights[i] !== targetHeights[i]) {
         output++;   
        }
    }
    return output;
}

console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]))