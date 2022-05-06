/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    const momeCache = new Map()
    const x = obstacleGrid.length
    const y = obstacleGrid[0].length
    if(obstacleGrid[0][0] === 1) return 0
    if(obstacleGrid[x - 1][y - 1] === 1) return 0
    const dp = (m, n) => {
        if(obstacleGrid[m][n] === 1) return 0
        if(m === 0 && n === 0) return 1
        if(momeCache.has(`${m}-${n}`)) return momeCache.get(`${m}-${n}`)
        if(m === 0) {
            const result = dp(m, n - 1)
            momeCache.set(`${m}-${n}`, result)
            return result
        } 
        if(n === 0) {
            const result = dp(m - 1, n)
            momeCache.set(`${m}-${n}`, result)
            return result
        }
        const result = dp(m - 1, n) +  dp(m, n - 1)
        momeCache.set(`${m}-${n}`, result)
        return result
    }
    return dp(x - 1, y - 1)
};

// @lc code=end

