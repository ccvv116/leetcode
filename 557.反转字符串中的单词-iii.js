/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = ''
    let stringArr = s.split(' ')
    for(let i = 0; i < stringArr.length; i++) {
        let reverse = ''
        for(let j = 0; j < stringArr[i].length; j++) {
            reverse = stringArr[i][j] + reverse
        }
        result = result + reverse + ' '
    }
    return result.trim()
};
// @lc code=end

