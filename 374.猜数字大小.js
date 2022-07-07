/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if(guess(n) === 0) return n
    let left = 0
    let right = n
    while(left < right) {
        let mid = Math.floor((left + right) / 2)
        let result = guess(mid)
        if(result === 0) return mid
        if(result === -1) {
            right = mid
        }
        if(result === 1) {
            left = mid + 1
        }
    }
};
// @lc code=end

