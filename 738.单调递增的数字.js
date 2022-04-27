/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    const numsArr = []
    if(n === 0) return 0
    while(n > 0) {
        numsArr.unshift(n % 10)
        n = Math.floor(n / 10)
    }
    let index = 0
    let max = 0
    for(let i = 0; i < numsArr.length; i++) {
        if(numsArr[i] > max) {
            max = numsArr[i]
            index = i
        }
        if(numsArr[i] < max) {
            numsArr[index] = numsArr[index] - 1
            index++
            while(index < numsArr.length) {
                numsArr[index++] = 9
            }
            break
        }
    }
    if(numsArr[0] === 0) numsArr.shift()
    return Number(numsArr.join(''))
};
// @lc code=end

