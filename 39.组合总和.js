/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    const backTracking = (candidates, target, index, path) => {
      const total = path.reduce((total, cur) => total + cur, 0)
      if(total === target) {
        result.push(path)
        return
      }
      if(total > target) return
      for (let i = index; i < candidates.length; i++) {
        backTracking(candidates, target, i, [...path, candidates[i]])
      }
    }
    backTracking(candidates, target, 0, [])
    return result
};
// @lc code=end

