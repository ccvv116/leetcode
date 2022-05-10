/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let right = 0
    let max = 0
    let countMap = new Map()
    while(right < s.length) {
        if(countMap.has(s[right])) {
            if(countMap.get(s[right]) >= left) {
                left = countMap.get(s[right]) + 1
            } else {
                max = Math.max(right - left + 1, max)
            }
        } else {
            max = Math.max(right - left + 1, max)
        }
        countMap.set(s[right], right)
        right++
    }
    return max
};
// @lc code=end

