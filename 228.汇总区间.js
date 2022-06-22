/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const length = nums.length
    if(length < 1) return []
    const result = []
    let start = nums[0]
    for(let i = 1; i < length; i++) {
        if(nums[i] - nums[i - 1] === 1) continue
        if(start === nums[i - 1]) {
            result.push(`${start}`)
        } else {
            result.push(`${start}->${nums[i - 1]}`)
        }
        start = nums[i]
    }
    if(start === nums[length - 1]) {
        result.push(`${start}`)
    } else {
        result.push(`${start}->${nums[length - 1]}`)
    }
    
    return result
};
// @lc code=end

