/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = []
    nums.sort((a,b) => a - b)
    const backTracking = (arr, path) => {
        if(!arr.length) {
            result.push(path)
            return
        }
        for(let i = 0; i < arr.length; i++) {
            // 去除同层重复
            if(i > 0 && arr[i - 1] === arr[i]) continue
            const newPath = [...path, arr[i]]
            const newArr = arr.slice(0,i).concat(arr.slice(i+1))
            backTracking(newArr, newPath)
        }
    }
    backTracking(nums, [])
    return result
};
// @lc code=end

