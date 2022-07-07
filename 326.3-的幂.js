/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

// 循环
// var isPowerOfThree = function(n) {
//     if(n === 0) return false
//     while(n !== 1) {
//         if(n % 3 !== 0) return false
//         n = n / 3
//     }
//     return true
// };

// 数学
var isPowerOfThree = function(n) {
    return n > 0 && 1162261467 % n === 0;
};
// @lc code=end

