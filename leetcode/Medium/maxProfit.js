/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let left = 0
    let right = 1
    let maxProfit = 0

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            left = right
        }
        right += 1
    }
    return maxProfit
};
console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
