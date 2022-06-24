/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 单指针
// var moveZeroes = function(nums) {
//     let count = 0
//     for(let i = 0; i < nums.length; i++) {
//         if(i < nums.length - count) {
//             if(nums[i] === 0) {
//                 count++
//                 continue
//             }
//             if(count) {
//                 nums[i - count] = nums[i]
//                 nums[i] = 0
//             }
//         } else {
//             if(nums[i] === 0) {
//                 count++
//             } else {
//                 nums[i - count] = nums[i]
//                 nums[i] = 0
//             }
//         }
//     }
// };

// 双指针
var moveZeroes = function(nums) {
    let left = 0
    let right = 0
    let length = nums.length
    while(right < length) {
        if(nums[right]) {
            let temp = nums[left] 
            nums[left] = nums[right]
            nums[right] = temp
            left++
        }
        right++
    }
};
// @lc code=end

