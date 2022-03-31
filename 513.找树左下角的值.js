/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let stock = [root]
    let bottomLeft;
    while(stock.length) {
        const temp = []
        let size = stock.length
        for(let i = 0; i < size; i++) {
            const node = stock.shift()
            if(i === 0) bottomLeft = node.val
            node.left && temp.push(node.left)
            node.right && temp.push(node.right)
        }
        stock = temp
    }
    return bottomLeft
};
// @lc code=end

