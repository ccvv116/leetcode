/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a === '0') return b
    if(b === '0') return a
    let aIndex = a.length - 1
    let bIndex = b.length - 1
    let sum = ""
    let up = 0
    while(aIndex >= 0 || bIndex >= 0) {
        let temp = Number(a[aIndex] || 0) + Number(b[bIndex] || 0) + up
        console.log()
        sum = `${temp % 2}` + sum
        up = Math.floor(temp / 2)
        aIndex--
        bIndex--
    }
    if(up) return `${up}${sum}`
    return sum
};
// @lc code=end

