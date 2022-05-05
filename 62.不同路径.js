/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// var uniquePaths = function(m, n) {
//     const arr = new Array(m).fill(new Array(n))
//     arr[0].fill(1)
//     arr.forEach((item) => item[0] = 1)
//     for(let i = 1; i < m; i++) {
//         for(let j = 1; j < n; j++) {
//             arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
//         }
//     }
//     return arr[m-1][n-1]
// };
const cache = new Map()
var uniquePaths = function(m, n) {
    const dp = (m,n) => {
        if(m === 1 || n === 1) return 1
        if(cache.has(`${m}-${n}`)) return cache.get(`${m}-${n}`)
        const result = dp(m - 1, n) + dp(m, n -1)
        cache.set(`${m}-${n}`, result)
        return result
    }
    return dp(m, n)
};
// @lc code=end

