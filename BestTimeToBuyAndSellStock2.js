/*
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Algorthm:
1. define a variable for the output
2. iterate through the array
3. define variable for buy price
4. if the current number is more than the buy price increase the output by the difference between the buy price and the current price
5. return output
*/

function maxProfit(prices) {
    let output = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            output += Math.abs(prices[i + 1] - prices[i])
        }
    }
    return output
}

console.log(maxProfit([7,6,4,3,1]));