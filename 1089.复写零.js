/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        if(arr[left++] === 0) arr[right--] = undefined
    }
    if(left === right && arr[left] === 0) {
        left = right
        right = arr.length - 1
        arr[right--] = 0
        left--
    } else {
        left = right
        right = arr.length - 1
    }

    // 从后向前快慢双指针
    while(left < right) {
        if(arr[left] === 0) {
            arr[right--] = 0
            arr[right--] = 0
            left--
        } else {
            arr[right--] = arr[left--]
        }
    }
};
// @lc code=end

