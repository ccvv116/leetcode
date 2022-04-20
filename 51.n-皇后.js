/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
const isDisabledCoor = (coor, coors) => {
    return coors.some((item) => {
        if(item.x === coor.x) return true
        if(Math.abs(item.x - coor.x) === Math.abs(item.y - coor.y)) return true
        return false
    })
}

var solveNQueens = function(n) {
    const result = []
    const coorsResult = []
    const backTracking = (y, coors) => {
        if(coors.length === n) {
            coorsResult.push(coors)
            return
        }
        for(let x = 0; x < n; x++) {
            const coor = {x,y}
            if(isDisabledCoor(coor, coors)) continue
            const newCoors = [...coors, coor]
            backTracking(y+1, newCoors)
        }
    }
    backTracking(0, [])
    coorsResult.forEach(coors => {
        const coorsStrs = []
        for(let i = 0; i < coors.length; i++) {
            coorsStrs[coors[i].y] = Array.from({ length: n }).map(() => '.')
            coorsStrs[coors[i].y][[coors[i].x]] = 'Q'
            coorsStrs[coors[i].y] = coorsStrs[coors[i].y].join('')
        }
        result.push(coorsStrs)
    })
    return result
};
// @lc code=end

