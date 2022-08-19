/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const newNums = nums.sort((a, b) => a - b)
    let result = 0
    for(let i = 0; i < newNums.length; i = i + 2) {
        result += newNums[i]
    }
    return result
};
// @lc code=end

