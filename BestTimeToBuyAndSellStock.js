/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

Algorthm:
1. Iterate through the array
2. Find the difference between the elements
3. return the highest difference or 0
*/

function maxProfit(prices){
    let highProfit = 0;
    let minBuyPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        highProfit = Math.max(highProfit, prices[i] - minBuyPrice);
        minBuyPrice = Math.min(minBuyPrice, prices[i]);
    }
    return highProfit
}

console.log(maxProfit([7,1,5,3,6,4]))