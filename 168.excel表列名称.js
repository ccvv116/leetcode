/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let result = ''
    while(columnNumber > 0) {
        let reminder = (columnNumber - 1) % 26
        columnNumber = Math.floor((columnNumber - 1) / 26)
        result = arr[reminder] + result
    }
    return result
};
// @lc code=end

