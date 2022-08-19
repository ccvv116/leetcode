/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let pre = timeSeries[0]
    let result = 0
    for(let i = 1; i < timeSeries.length; i++) {
        let diff = timeSeries[i] - pre
        if(diff > duration - 1) {
            result += duration
        } else {
            result += diff
        }
        pre = timeSeries[i]
    }
    return result + duration
};
// @lc code=end

