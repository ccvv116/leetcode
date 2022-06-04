/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let point = digits.length - 1
    while(point >= 0) {
        if(digits[point] === 9) {
            digits[point] = 0
            if(point === 0) {
                digits.unshift(1)
                break
            }
            point--
            continue
        } else {
            digits[point]++
            break
        }
    }
    return digits
};
// @lc code=end

