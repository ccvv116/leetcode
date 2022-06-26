/**
 * @param {number[][]} costs
 * @return {number}
 */
 var minCost = function(costs) {
    const length = costs.length
    const ans = Array.from({ length })
    ans[0] = costs[0]
    for(let i = 1; i < length; i++) {
        ans[i] = []
        ans[i][0] = costs[i][0] + Math.min(ans[i - 1][1], ans[i - 1][2])
        ans[i][1] = costs[i][1] + Math.min(ans[i - 1][0], ans[i - 1][2])
        ans[i][2] = costs[i][2] + Math.min(ans[i - 1][0], ans[i - 1][1])
    }
    return Math.min(ans[length - 1][0], ans[length - 1][1], ans[length - 1][2])
};

// console.log(minCost([[17,2,17],[16,16,5],[14,3,19]]))