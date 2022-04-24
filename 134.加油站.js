/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const newArr = []
    const length = gas.length
    for(let i = 0; i < length; i++) {
        newArr[i] = gas[i] -  cost[i]
    }
    for(let start = 0; start < length; start++) {
        if(newArr[start] < 0) continue
        let gasTotal = 0
        for(let i=start; i < length + start; i++) {
            let curStation = i >= length ? i - length : i
            gasTotal = gasTotal + newArr[curStation]
            if(gasTotal < 0) break
            if(gasTotal >= 0 && i === length + start - 1) {
                return start
            }
        }
    }
    return -1
};
// @lc code=end

