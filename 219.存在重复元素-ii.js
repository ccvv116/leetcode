/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// k范围内暴力遍历
// var containsNearbyDuplicate = function(nums, k) {
//     for(let i = 0; i < nums.length - 1; i++) {
//         const minIndex = Math.min(i + k, nums.length - 1)
//         for(let j = i + 1; j <= minIndex; j++) {
//             if(nums[i] === nums[j]) return true
//         }
//     }
//     return false
// };

// set + 滑动窗口
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set()
    for(let i = 0; i < nums.length; i++) {
        set.delete(nums[i - k - 1])
        if(set.has(nums[i])) return true
        set.add(nums[i])
    }
    return false
};
// @lc code=end

