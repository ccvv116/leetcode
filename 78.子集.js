/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]]
    function backTracking(startIndex, path) {
        if (startIndex > nums.length) return
        for(let i = startIndex; i < nums.length; i++) {
            let newPath = [...path, nums[i]]
            result.push(newPath)
            backTracking(i + 1, newPath)
        }
    }
    backTracking(0, [])
    return result
};
// @lc code=end

