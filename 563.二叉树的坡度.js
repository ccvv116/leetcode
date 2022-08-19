/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
    if(!root) return 0
    let reuslt = 0
    let traverse = (node) => {
        let leftVal = 0
        let rightVal = 0
        if(node.left) leftVal = traverse(node.left)
        if(node.right) rightVal = traverse(node.right)
        reuslt += Math.abs(leftVal - rightVal)
        return leftVal + rightVal + node.val
    }
    traverse(root)
    return reuslt
};
// @lc code=end

