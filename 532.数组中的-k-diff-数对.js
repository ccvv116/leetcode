/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const newNums = nums.sort((a, b) => a - b)
    const needMap = new Map()
    let result = 0
    for(let i = 0; i < newNums.length; i++) {
        if(needMap.has(newNums[i])) {
            if(needMap.get(newNums[i])) {
                continue
            }
            result++
            needMap.set(newNums[i], true)
        }
        if(!needMap.has(newNums[i] + k)) {
            needMap.set(newNums[i] + k, false)
        }
    }
    return result
};
// @lc code=end

