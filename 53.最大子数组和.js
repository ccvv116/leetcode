/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力回溯 Time Limit Exceeded 超时无法通过
// var maxSubArray = function(nums) {
//     if(!nums.length) return 0
//     let result = -Infinity
//     const backTracking = (start) => {
//         if(start >= nums.length) return
//         let sum = 0
//         for(let i = start; i < nums.length; i++) {
//             sum = sum + nums[i]
//             if(sum > result) result = sum
//         }
//         backTracking(start + 1)
//     }
//     backTracking(0)
//     return result
// };

// 运行速度勉强通过
// 209/209 cases passed (9392 ms)
// Your runtime beats 5.06 % of javascript submissions
// Your memory usage beats 85 % of javascript submissions (49 MB)
// var maxSubArray = function(nums) {
//     if(!nums.length) return 0
//     let result = -Infinity
//     for(let i = 0; i < nums.length;) {
//         // 小于0跳过，从正数开始
//         if(nums[i] <= 0) {
//             if(nums[i] > result) result = nums[i]
//             i++
//             continue
//         }
//         let count = 0
//         let nextIndex;
//         for(let j = i; j < nums.length; j++) {
//             // 调整外层循环指针位置为首个负数的下一个
//             if(!nextIndex && nums[j] < 0) {
//                 nextIndex = j + 1
//                 i = nextIndex
//             }
//             // 内层循环全部为正数，结束循环
//             if(!nextIndex && j === nums.length - 1) i = j + 1
//             count+= nums[j]
//             if(count > result) result = count
//         }
//     }
//     return result
// };

var maxSubArray = function(nums) {
    if(!nums.length) return 0
    let result = -Infinity
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        count += nums[i]
        if(count > result) result = count
        if(count < 0) count = 0
    }
    return result
};
// @lc code=end

