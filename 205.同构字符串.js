/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = {}
    const map2 = {}
    for(let i = 0; i < s.length; i++) {
        if(map1[s[i]] || map2[t[i]]) {
            if(map1[s[i]] !== t[i]) return false
            if(map2[t[i]] !== s[i]) return false
        } else {
            map1[s[i]] = t[i]
            map2[t[i]] = s[i]
        }

    }
    return true
};
// @lc code=end

