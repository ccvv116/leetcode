/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const countMap = new Map()
    if(nums.length <= 1) return false
    let remainder = 0
    for(let i = 0; i < nums.length; i++) {
        remainder = (nums[i] + remainder) % k
        if(remainder === 0 && i > 0) return true
        // 出现重复余数 则表示加了n个倍数的值
        if(countMap.has(remainder)) {
            // 确保长度两位以上
            if(countMap.get(remainder) === i - 1) {
                continue
            }
            return true
        }
        countMap.set(remainder, i)
    }
    return false
};
// @lc code=end

