/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
	nums.sort((a, b) => a - b)
	let sum = 0
	for(let i = 0; i < nums.length; i++) {
		if(k > 0) {
			if(nums[i] < 0) {
				k--
				sum += -nums[i]
			}
			if(nums[i] >= 0) {
				if(k % 2 === 1) {
					if(i > 0 && Math.abs(nums[i-1]) < nums[i]) {
						sum += -(Math.abs(nums[i-1]) * 2)
						sum += nums[i]
					} else {
						sum += -nums[i]
					}
				} else {
					sum += nums[i]
				}
				k = 0
			}
		} else {
			sum += nums[i]
		}
	}
	if(k % 2 === 1) sum = sum - (-nums[nums.length - 1] * 2)
	return sum
};
// @lc code=end

