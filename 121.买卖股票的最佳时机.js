/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let top = prices[0]
    let bottom = prices[0]
    let max = 0
    for(let i = 1; i < prices.length; i++) {
        const current = prices[i]
        if(current > top) {
            top = current
            max = Math.max(max, top - bottom)
        }
        if(current < bottom) {
            bottom = current
            top = current
        }
    }
    return max
};
// @lc code=end

