/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s === '') return true
    let left = 0
    let right = s.length - 1
    const reg = /[A-Za-z0-9]/
    while(left < right) {
        if (!reg.test(s[left])) {
            left++
            continue
        }
        if (!reg.test(s[right])) {
            right--
            continue
        }
        if(s[left++].toLocaleLowerCase() !== s[right--].toLocaleLowerCase()) {
            return false
        }
    }
    return true
}; 
// @lc code=end

