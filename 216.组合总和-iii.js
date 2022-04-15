/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = []
    function backTrack(k, n, start, path) {
      // 最后一层
      if(path.length === k) {
        const total = path.reduce((total, cur) => total + cur, 0)
        if(total === n) {
          result.push(path)
        }
        return total
      }
      for(let i = start; i <= 9; i++) {
        const total = backTrack(k, n, i + 1, [...path, i])
        if(total > n) break
      }
    }
    backTrack(k, n, 1, [])
    return result
};
// @lc code=end

