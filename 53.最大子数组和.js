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

var maxSubArray = function(nums) {
    if(!nums.length) return 0
    let result = -Infinity
    for(let i = 0; i < nums.length;) {
        // 小于0跳过
        if(nums[i] <= 0) {
            if(nums[i] > result) result = nums[i]
            i++
            continue
        }
        let count = 0
        let nextIndex;
        for(let j = i; j < nums.length; j++) {
            if(!nextIndex && nums[j] < 0) {
                nextIndex = j + 1
                i = nextIndex
            }
            if(!nextIndex && j === nums.length - 1) i = j + 1
            count+= nums[j]
            if(count > result) result = count
        }
    }
    return result
};
// @lc code=end

