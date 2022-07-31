/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let left = 0
    let right = n
    while(left < right) {
        let mid = Math.floor((left + right) / 2)
        let result = Math.pow(4, mid)
        if(n === result) {
            return true
        }
        if(n > result) {
            left = mid + 1
        }
        if(n < result) {
            right = mid
        }
    }
    return false
};
// @lc code=end

