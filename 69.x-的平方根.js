/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0
    let right = x
    if(left * left === x) return left
    if(right * right === x) return right
    let mid = Math.floor((left + right) / 2)
    while(mid !== left) {
        let temp = mid * mid
        if(temp === x) return mid
        if(temp > x) {
            right = mid
        } else {
            left = mid
        }
        mid = Math.floor((left + right) / 2)
    }
    return mid
};
// @lc code=end

