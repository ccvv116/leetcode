/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
	let crossX1 =  Infinity
	let crossX2 = -Infinity
	let count = 0
	for(let i = 0; i < intervals.length; i++) {
		// 无交集
		if(intervals[i][0] >= crossX2) {
			crossX1 = intervals[i][0]
			crossX2 = intervals[i][1]
			continue
		}
		// 有交集
		if(intervals[i][0] < crossX2) {
			crossX1 = Math.min(intervals[i][0], crossX1)
			crossX2 = Math.min(intervals[i][1], crossX2)
			count++
		}
	}
    return count
};
// @lc code=end

