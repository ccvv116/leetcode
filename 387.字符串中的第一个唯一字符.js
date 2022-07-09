/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const countMap = {}
    for(let i = 0; i < s.length; i++) {
        if(countMap[s[i]]) {
            countMap[s[i]]++
        } else {
            countMap[s[i]] = 1
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(countMap[s[i]] === 1) return i
    }
    return -1
};
// @lc code=end

