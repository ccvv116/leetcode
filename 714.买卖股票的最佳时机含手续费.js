/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let result = 0
    let min = prices[0]
    for(let i = 1; i < prices.length; i++) {
        // 记录买入价格
        if(prices[i] < min) min = prices[i]
        // 收益小于等于手续费不做处理
        if(prices[i] <= min + fee) {
            continue
        }
        // 有收益的节点
        if(prices[i] > min + fee) {
            result += prices[i] - min - fee
            // 消除连续上涨的收益手续费
            min = prices[i] - fee
        }
    }
    return result
};
// @lc code=end

