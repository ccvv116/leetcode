/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
	intervals.sort((a, b) => a[0] - b[0])
	const newArr = []
	let start = intervals[0][0]
	let end = intervals[0][1]
	for(let i = 0; i < intervals.length; i++) {
		// 不在区间
		if(intervals[i][0] > end) {
			newArr.push([start, end])
			start = intervals[i][0]
			end = intervals[i][1]
		} else { // 在区间内
			end = Math.max(end, intervals[i][1])
		}	
	}
	newArr.push([start, end])
	return newArr
};
// @lc code=end

