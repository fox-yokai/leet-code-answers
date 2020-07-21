/*
Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

Algorthm:
1. determine the kid with the highest amount of candies
2. iterate through the array
3. determine if the the candies + the extra candies is greater than the highest amount of candies
3a. if it is push true to the output array
3b. if false push false to the output array
4. return output 
*/

function kidsWithCandies(candies, extraCandies){
    let grtCandies = Math.max(...candies);
    let output = [];
    candies.forEach(candy => {
        let maxCandy = candy + extraCandies;
        (maxCandy >= grtCandies) ? output.push(true) : output.push(false)
    });
    return output
}

console.log(kidsWithCandies([2,3,5,1,3], 3))