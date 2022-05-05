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

var uniquePaths = function(m, n) {
    const arr = new Array(m).fill(new Array(n))
    arr[0].fill(1)
    arr.map((item) => item[0] = 1)
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
        }
    }
    return arr[m-1][n-1]
};
// @lc code=end

