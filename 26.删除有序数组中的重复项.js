/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums.length) return 0
    let fastPiont = 0
    let slowPoint = 0
    const maxNumb = nums[nums.length - 1]
    while(true) {
        if(nums[fastPiont] > nums[slowPoint]) {
            nums[++slowPoint] = nums[fastPiont]
        }
        if(nums[fastPiont] === maxNumb) break
        fastPiont++
    }
    return slowPoint + 1
};
// @lc code=end

