/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let firstListLength = firstList.length
    let seconListLength = secondList.length
    let firstIndex = 0
    let secondIndex = 0
    const result = []
    while(firstIndex < firstListLength) {
        const firstCur = firstList[firstIndex]
        while(secondIndex < seconListLength) {
            const secondCur = secondList[secondIndex]
            // 无交集
            if(firstCur[0] > secondCur[1]) {
                secondIndex++
                continue
            }
            if(firstCur[1] < secondCur[0]) break
            // 有交集
            const start = Math.max(firstCur[0], secondCur[0])
            const end = Math.min(firstCur[1], secondCur[1])
            result.push([start, end])

            // 判断移动哪个index
            if(firstCur[1] > secondCur[1]) {
                secondIndex++
                continue
            } else {
                break
            }
        }
        firstIndex++
    }
    return result
};
// @lc code=end

