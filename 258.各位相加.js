/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let result = 0
    while(num) {
        result += num % 10
        num = Math.floor(num / 10)
        if(num === 0 && result >= 10) {
            num = result
            result = 0
        }
    }
    return result
};
// @lc code=end

