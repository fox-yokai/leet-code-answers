/*
Given two integer arrays startTime and endTime and given an integer queryTime.

The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

Algorthm:
1. declare output varible
2. iterate through the startTime
3. if startTime >= queryTime && endTime <= queryTime then increase output
4. return output
*/

function busyStudent(startTime, endTime, queryTime) {
    let output = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime){
            output++;
        }
        
    }
    return output;
}

console.log(busyStudent([1,2,3], [3,2,7], 4));

// // solution using ES6
// var busyStudent = function(startTime, endTime, queryTime) {
//     return startTime.reduce(
//         (count, item, index) => (startTime[index]<=queryTime && endTime[index]>=queryTime ? count+1 : count), 0);

// };