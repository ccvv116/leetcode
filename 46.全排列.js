/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const result = []
    const backTracking = (newNums, path) => {
      if(!newNums.length) {
        result.push(path)
        return
      }
      for(let i = 0; i < newNums.length; i++) {
        const newPath = [...path, newNums[i]]
        const restNums = newNums.slice(0, i).concat(newNums.slice(i+1))
        backTracking([...restNums], [...newPath])
      }
    }
    backTracking(nums, [])
    return result
  };
// @lc code=end

