/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const arr = [cost[0], cost[1]]
    for(let i = 2; i < cost.length; i++) {
        arr[i] = Math.min(arr[i - 2], arr[i - 1]) + cost[i]
    }
    return Math.min(arr[cost.length - 1], arr[cost.length - 2])
};
// @lc code=end

