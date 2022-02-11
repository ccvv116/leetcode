/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */

 const SymbolMap = {
'+': (a, b) => Number(a) + Number(b),
'-': (a, b) => Number(a) - Number(b),
'*': (a, b) => Number(a) * Number(b),
'/': (a, b) => Number.parseInt(Number(a) / Number(b)),
}
const isSymbol = (s) => {
return !!SymbolMap[s]
}
var evalRPN = function(tokens) {
    const stack = []
    let point = 0
    while(point < tokens.length) {
      if (isSymbol(tokens[point])) {
        const second = stack.pop()
        const first = stack.pop()
        stack.push(SymbolMap[tokens[point]](first, second))
      } else {
        stack.push(tokens[point])
      }
      point++
    }
    return stack[0]
};
// @lc code=end
