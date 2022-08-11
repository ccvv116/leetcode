/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let pair = 0
    let strMap = {}
    for(let i = 0; i < s.length; i++) {
        if(strMap[s[i]]) {
            strMap[s[i]]++
            if(strMap[s[i]] % 2 === 0) {
                pair++
            }
        } else {
            strMap[s[i]] = 1
        }
    }
    if(pair * 2 < s.length) {
        return pair * 2 + 1
    }
    return pair * 2
};
// @lc code=end

