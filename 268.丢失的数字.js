/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let result = nums.length
    for(let i = 0; i < nums.length; i++) {
        result += i - nums[i]
    }
    return result
};
// @lc code=end

