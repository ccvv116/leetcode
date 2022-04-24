/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
	if(nums.length === 1) return 0
	let max = 0
	let count = 0
	let temp = 0
	for(let i = 0; i <= max; i++) {
		temp = Math.max(i + nums[i], temp)
		if(temp >= nums.length - 1) return ++count
		if(i === max) {
			max = temp
			++count
		}
	}
	return count
};
// @lc code=end

