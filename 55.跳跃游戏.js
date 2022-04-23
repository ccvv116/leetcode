/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(!nums.length) return false
    const getMax = (start, end) => {
        let max = -1
        for(let i = start; i <= end; i++) {
            let temp = i + nums[i]
            if(temp > max) max = temp
        }
        if(max === end) return end
        if(max >= nums.length -1) return max
        return getMax(end, max)
    }
    return getMax(0, 0) >= nums.length - 1
};
// @lc code=end

