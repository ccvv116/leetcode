/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    index = s.length - 1
    sum = 0
    pre = 0
    while(index > -1) {
        const cur = numMap[s[index]]
        if(cur < pre) {
            sum -= cur
            pre = cur
            index--
            continue
        }
        sum += cur
        pre = cur
        index--
    }
    return sum
};
// @lc code=end

