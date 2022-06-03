/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = s.length
    let count = 0
    for(let i = length - 1; i >= 0; i--) {
        if(s[i] !== ' ') {
            count++
            continue
        }
        if(s[i] === ' ' && count) break
    }
    return count
};
// @lc code=end

