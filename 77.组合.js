/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []
    // 回溯
    const backTracking = (n, k, start, path = []) => {
        // 最后一层
        if(path.length === k) {
            result.push(path)
            return
        }
        for(let i = start; i <= n; i++) {
            backTracking(n, k, i + 1, [...path, i])
        }
    }
    backTracking(n, k, 1, [])
    return result
};
// @lc code=end

