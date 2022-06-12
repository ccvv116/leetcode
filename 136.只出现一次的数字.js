/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// var singleNumber = function(nums) {
//     const countMap = {}
//     for(let i = 0; i < nums.length; i++) {
//         const cur = nums[i]
//         if(countMap[cur]) {
//             countMap[cur]++
//         } else {
//             countMap[cur] = 1
//         }
//     }
//     for(key in countMap) {
//         if(countMap[key] === 1) return key
//     }
// };

// 位运算方法
var singleNumber = function(nums) {
    let result = nums[0]
    for(let i = 1; i < nums.length; i++) {
        result = result ^ nums[i]
    }
    return result
};
// @lc code=end

