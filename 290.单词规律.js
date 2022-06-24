/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const arr = s.split(' ')
    if(pattern.length !== arr.length) return false
    const set1 = new Set()
    const set2 = new Set()
    const set3 = new Set()
    for(let i = 0; i < pattern.length; i++) {
        set1.add(`${pattern[i]}${arr[i]}`)
        set2.add(pattern[i])
        set3.add(arr[i])
    }
    return set1.size === set2.size && set1.size === set3.size
};
// @lc code=end

