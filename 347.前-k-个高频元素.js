/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const countMap = {}
    for (let i = 0; i < nums.length; i++) {
      if (!countMap[nums[i]]) {
        countMap[nums[i]] = 1
      } else {
        countMap[nums[i]]++
      }
    }
    const arr = Object.entries(countMap).sort((a, b) => b[1] - a[1])
    const resArr = arr.slice(0, k).map(i => i[0])
    return resArr
};
// @lc code=end

