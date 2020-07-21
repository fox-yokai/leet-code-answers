/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Algorthm:
1. take in n and create an array of numbers
2. find the product of its digits
3. find the sum of its digits
4. return the difference of the between the product and sum
*/

function subtractProductAndSum(n){
    let nArr = (''+n).split('');
    let product = 1;
    let sum = 0;
    for (let i = 0; i < nArr.length; i ++){
        product *= nArr[i];
        sum += parseInt(nArr[i]);
    }
    return product - sum;
}

console.log(subtractProductAndSum(4421))
