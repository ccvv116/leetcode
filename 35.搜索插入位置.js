/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target <= nums[0]) return 0
    let maxRange = nums.length
    let start = 0
    while(maxRange - start > 1) {
        let pivot = Math.floor((maxRange + start) / 2)
        if(nums[pivot] === target) return pivot
        if(nums[pivot] > target) {
            maxRange = pivot
        } else {
            start = pivot
        }
    }
    return maxRange
};
// @lc code=end

