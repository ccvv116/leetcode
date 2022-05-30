/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let laststrIndex = strs.length - 1
    let container = ''
    let index = 0
    let letterIndex = 0
    let tempLetter = strs[0][0]
    while(true) {
        let cur = strs[index++]
        let letter = cur[letterIndex]
        if(!letter || letter !== tempLetter) {
            break
        }
        if(index > laststrIndex) {
            container += letter
            index = 0
            // 下一个
            tempLetter = strs[0][++letterIndex]
            if(!tempLetter) break
        }
    }
    return container
};
// @lc code=end

