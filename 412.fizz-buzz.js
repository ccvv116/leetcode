/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = []
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0) {
            if(i % 5 === 0) {
                result.push('FizzBuzz')
            } else {
                result.push('Fizz')
            }
            continue
        }
        if(i % 5 === 0) {
            result.push('Buzz')
            continue
        }
        result.push(`${i}`)
    }
    return result
};
// @lc code=end

