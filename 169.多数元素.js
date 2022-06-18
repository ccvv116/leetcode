/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cur = nums[0]
    let count = 1
    for(let i = 1; i < nums.length; i++) {
        cur === nums[i] ? count++ : count--
        if(count <= 0) {
            cur = nums[i]
            count = 1
        }
    }
    return cur
};
// @lc code=end

