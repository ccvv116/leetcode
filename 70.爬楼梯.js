/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const fib = (n, mem) => {
        if(mem[n]) return mem[n]
        if(n <= 2) return n
        mem[n] = fib(n-2, mem) + fib(n-1, mem)
        return mem[n]
    }
    return fib(n, {})
};
// @lc code=end

