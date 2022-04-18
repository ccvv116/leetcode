/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    if(nums.length < 2) return []
    const result = []
    const backTracking = (startIndex, path) => {
        // countMap[nums[i]] > 1 为重复数据
        const countMap = {}
        for(let i = startIndex; i < nums.length; i++) {
            countMap[nums[i]] ? countMap[nums[i]]++ : countMap[nums[i]] = 1
            // 同层去重
            if(i > startIndex && countMap[nums[i]] > 1) continue
            if(path[path.length - 1] > nums[i]) continue
            const newPath = [...path, nums[i]]
            if(newPath.length > 1) {
            result.push(newPath)
            }
            backTracking(i + 1, newPath)
        }
    }
    backTracking(0, [])
    return result
};
// @lc code=end

