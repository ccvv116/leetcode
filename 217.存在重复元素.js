/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const countMap = {}
    for(let i = 0; i < nums.length; i++) {
        if(countMap[nums[i]]) return true
        countMap[nums[i]] = 1
    }
    return false
};
// @lc code=end

