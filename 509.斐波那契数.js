/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const obj = {}
var fib = function(n) {
    if(obj[n]) return obj[n]
    if(n <= 1) {
        obj[n] = n
        return n
    }
    obj[n] = fib(n - 1) + fib(n - 2)
    return obj[n]
};
// @lc code=end

