/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1) return true
    let left = 0
    let right = num
    while(left < right) {
        mid = Math.floor((right + left) / 2)
        const temp = mid * mid
        if(temp === num) return true
        if(temp < num) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return false
};
// @lc code=end

