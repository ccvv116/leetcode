/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let result = 0
    let sum = 0
    while(sum <= n) {
        sum += result++
    }
    return result - 2
};
// @lc code=end

