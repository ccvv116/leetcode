/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentCount = 0
    let lateLineLength = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'A') {
            absentCount++
            if(absentCount >= 2) return false
        }
        if(s[i] === 'L') {
            lateLineLength++
            if(lateLineLength >= 3) return false
        } else {
            lateLineLength = 0
        }
    }
    return true
};
// @lc code=end

