/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0
    let right = 1
    let maxProfit = 0

    while (right <= prices.length) {
        let operation = prices[right] - prices[left]
        //check if operation yields a profit
        if (operation > 0)
            maxProfit += operation 
        //if so add to maxProfit and move
        left++
        right++
    }
    return maxProfit
};
console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([7,6,4,3,1]))
