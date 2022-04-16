/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = (str) => {
    if(!str) return false
    let front = 0
    let back = str.length - 1
    while(front < back) {
        if(str[front] !== str[back]) return false
        front++
        back--
    }
    return true
}

var partition = function(s) {
    const result = []
    const backTrack = (s, startIndex, path) => {
        // 遍历结束
        if(startIndex > s.length - 1) {
            result.push(path)
            return
        }
        // 遍历每一个字串
        for(let i = startIndex; i < s.length; i++) {
            const subStr = s.substring(startIndex, i+1)
            if(isPalindrome(subStr)) {
                backTrack(s, i+1 , [...path, subStr])
            }
        }
    }
    backTrack(s, 0, [])
    return result
};
// @lc code=end

