/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0
    for(let i = columnTitle.length - 1; i >= 0; i--) {
        const letter = columnTitle[i]
        result = result + (letter.charCodeAt() - 64) * Math.pow(26, columnTitle.length - 1 - i)
    }
    return result
};
// @lc code=end

