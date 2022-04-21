/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a)
    s.sort((a, b) => b - a)
    let count = 0
    for(let i = 0; i < g.length; i++) {
        if(!s.length) break
        if(s[0] < g[i]) continue
        count++
        s.shift()
    }
    return count
};
// @lc code=end

