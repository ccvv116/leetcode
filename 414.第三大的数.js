/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const newNums = [...new Set(nums)]
    let first = -Infinity
    let second = -Infinity
    let third = -Infinity
    for(let i = 0; i < newNums.length; i++) {
        if(newNums[i] > first) {
            third = second
            second = first
            first = newNums[i]

        } else if(newNums[i] > second) {
            third = second
            second = newNums[i]
        } else if(newNums[i] > third) {
            third = newNums[i]
        }
    }
    if(newNums.length >= 3) {
        return third
    }
    return first
};
// @lc code=end

