/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [[]]
    nums.sort((a, b) => a - b)
    function backTracking(startIndex, path) {
        if(startIndex === nums.length) return
        for(let i = startIndex; i < nums.length; i++) {
            // 同层重复直接跳过
            if(i > startIndex && nums[i-1] === nums[i]) continue 
            result.push([...path, nums[i]])
            backTracking(i + 1, [...path, nums[i]])         
        }
        
    }
    backTracking(0, [])
    return result
};
// @lc code=end

