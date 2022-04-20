/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const isValid = (row, i, value, board) => {
    // 检查行重复
    // console.log(board[row])
    if(board[row].find((item => item == value))) return false
    // 检查列重复
    for(let start = 0; start < 9; start++) {
        if(board[start][i] == value) return false
    }
    // 九宫格检查
    let startI = Math.floor(i / 3) * 3
    let endI = startI + 3
    let startRow = Math.floor(row / 3) * 3
    let endRow = startRow + 3
    for(let tempRow = startRow; tempRow < endRow; tempRow++) {
        for(let tempI = startI; tempI < endI; tempI++) {
            if(board[tempRow][tempI] == value) return false
        }
    }
    return true
}
var solveSudoku = function(board) {
    const backTracking = (row, i, board) => {
        // 纵向遍历
        for(let tempRow = 0; tempRow < 9; tempRow++) {
            // 横向遍历
            for(let tempI = 0; tempI < 9; tempI++) {
                // 有数字跳过
                if(board[tempRow][tempI] !== '.') continue
                // 值填入
                for(let j = 1; j < 10; j++) {
                    if(isValid(tempRow,tempI,j,board)) {
                        const temp = board[tempRow][tempI]
                        board[tempRow][tempI] = j+""
                        if (backTracking(tempRow, tempI, board)) return true
                        board[tempRow][tempI] = temp
                    }

                }
                return false
            }
        }
        return true
    }
    // JSON.parse(JSON.stringify(board))
    backTracking(0, 0, board)
    return board
};
// @lc code=end

