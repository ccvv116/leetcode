/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n === 2) return 1
    let sum = 0
    let i = 2
    while(i <= 58) {
        let temp
        if(n % i === 0) {
            temp = Math.pow(n / i, i)
        } else {
            let remainder = n % i
            let integer = Math.floor(n / i)
            temp = Math.pow(integer, i - remainder) * Math.pow(integer + 1, remainder)
        }
        if(temp <= sum) return sum
        sum = temp
        i++
    }
    return sum
};
// @lc code=end

