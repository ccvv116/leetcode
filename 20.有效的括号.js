/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const bracketTypesMap = {
    round: {
        left: '(',
        right: ')',
    },
    square: {
        left: '[',
        right: ']',
    },
    curly: {
        left: '{',
        right: '}',
    },
}
const isLeftBracket = (s) => {
    if (s === bracketTypesMap.round.left) return true
    if (s === bracketTypesMap.square.left) return true
    if (s === bracketTypesMap.curly.left) return true
    return false
}

const isRightBracket = (s) => {
    if (s === bracketTypesMap.round.right) return true
    if (s === bracketTypesMap.square.right) return true
    if (s === bracketTypesMap.curly.right) return true
    return false
}

const isCoupleBracket = (left, right) => {
    if (left === bracketTypesMap.round.left && right === bracketTypesMap.round.right) return true
    if (left === bracketTypesMap.square.left && right === bracketTypesMap.square.right) return true
    if (left === bracketTypesMap.curly.left && right === bracketTypesMap.curly.right) return true
    return false
}

var isValid = function(s) {
    const stack = []
    let point = 0
    while(point < s.length) {
        if (isLeftBracket(s[point])) {
            stack.push(s[point])
        }
        if (isRightBracket(s[point])) {
            if (!isCoupleBracket(stack.pop(), s[point])) {
                return false
            }
        }
        point++
    }
    return !stack.length
};
// @lc code=end

