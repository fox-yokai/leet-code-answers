/* 
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Algorthm:
1) iterate around the array
2) for each array in the grid reduce to find sum
3) compare sum to highest wealth
4) if wealth is higher then update highest wealth
5) return highest wealth
*/

function maximumWealth(accounts) {
    let computedWeath = []
    accounts.forEach(account => {
        computedWeath.push(account.reduce((acc, currentValue) => acc + currentValue ))
    });
    return Math.max(...computedWeath)
}

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])