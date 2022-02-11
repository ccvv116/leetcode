/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []
    let point = 0
    while(point < s.length) {
        const last = stack[stack.length - 1]
        if (last === s[point]) {
            point++
            stack.pop()
        } else {
            stack.push(s[point])
            point++
        }
    }
    return stack.join('')
}
// @lc code=end

