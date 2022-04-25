/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candyArr = new Array(ratings.length).fill(1)
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]) candyArr[i] = candyArr[i - 1] + 1
    }
    for(let i = ratings.length - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            candyArr[i] = Math.max(candyArr[i + 1] + 1, candyArr[i])
        }
    }
    return candyArr.reduce((total, cur) => total + cur, 0)
};
// @lc code=end

