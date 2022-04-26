/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0])
    let count = 0
    let crossX1 = Infinity
    let crossX2 = -Infinity
    for(let i = 0; i < points.length; i++) {
        // 无交集
        if (points[i][0] > crossX2) {
            crossX1 = points[i][0]
            crossX2 = points[i][1]
            count++
            continue
        }
        // 有交集
        crossX1 = Math.max(points[i][0], crossX1)
        crossX2 = Math.min(points[i][1], crossX2)
    }
    return count
};
// @lc code=end

