/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = []
    function backTracking(s, startIndex, path) {
        if(startIndex === s.length && path.length === 4) {
            result.push(path.join('.'))
            return
        }
        for(let i = startIndex; i < startIndex + 3; i++) {
            const newStr = s.substring(startIndex, i+1)
            if(newStr.length > 1 && newStr[0] === '0') break
            if(newStr > 255) break
            if(startIndex > s.length) break
            backTracking(s, i + 1, [...path, newStr])
        }
    }  
    backTracking(s, 0 ,[])
    return result
};
// @lc code=end

