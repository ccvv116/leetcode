/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(!n) return false
    while(n !== 1) {
        if( n % 7 === 0) return false
        if( n % 5 === 0) {
            n = n / 5
            continue
        }
        if(n % 3 === 0) {
            n = n / 3
            continue
        }
        if(n % 2 === 0) {
            n = n / 2
            continue
        }
        return false
    }
    return true
};
// @lc code=end

