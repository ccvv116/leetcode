/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

 const dict = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z'],
  }

var letterCombinations = function(digits) {
    if(!digits) return []
    const result = []
    const backTracking = (digits, index, path) => {
      if(index === digits.length) {
        result.push(path)
        return
      }
      const curArr = dict[digits[index]]
      for(let i = 0; i < curArr.length; i++) {
        backTracking(digits, index + 1, path + curArr[i])
      }
    }
    backTracking(digits, 0, '')
    return result
};
// @lc code=end

