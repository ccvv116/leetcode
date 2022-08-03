/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0
    let right = s.length - 1
    const ss = 'aeiouAEIOU'
    let leftside = ''
    let rightside = ''
    while(left <= right) {
        if(!ss.includes(s[left])) {
            leftside += s[left++]
            continue
        }
        if(!ss.includes(s[right])) {
            rightside = s[right--] + rightside
            continue
        }
        if(left === right) {
            rightside = s[right--] + rightside
            continue
        }
        leftside += s[right--]
        rightside = s[left++] + rightside
    }
    return leftside + rightside 
};
// @lc code=end

