/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    if(x === 0) return true
    const arr = x.toString().split('')
    while(arr.length > 1) {
        if(arr.pop() !== arr.shift()) return false
    }
    return true
};
// @lc code=end

