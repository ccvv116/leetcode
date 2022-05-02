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

// dp
var climbStairsDp = function(n) {
    const fib = (n, mem) => {
        if(mem[n]) return mem[n]
        if(n <= 2) return n
        mem[n] = fib(n-2, mem) + fib(n-1, mem)
        return mem[n]
    }
    return fib(n, {})
};

// 普通方法
var climbStairs = function(n) {
    let arr = [1, 2, 3]
    for(let i = 2; i < n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1]
    }
    return arr[n - 1]
};
// @lc code=end

