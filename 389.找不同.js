/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charCode = 0 
    for(let i = 0; i < s.length; i++) {
        charCode ^= s[i].charCodeAt() ^ t[i].charCodeAt()
    }
    charCode ^= t[t.length - 1].charCodeAt()
    return String.fromCharCode(charCode)
};
// @lc code=end

