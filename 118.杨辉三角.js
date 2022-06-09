/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]]
    while(result.length < numRows) {
        const lastRow = result[result.length-1]
        const newRow = []
        let pre = 1
        for(let i = 1; i < lastRow.length; i++) {
            newRow.push(pre + lastRow[i])
            pre = lastRow[i]
        }
        result.push([1, ...newRow, 1])
    } 
    return result
};
// @lc code=end

