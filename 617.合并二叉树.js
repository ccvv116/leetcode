/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(node1, node2) {
    if (!node1 && !node2) return null
    const val1 = node1?.val || 0
    const val2 = node2?.val || 0
    const val =  val1 + val2
    const newNode = new TreeNode(val)
    newNode.left = mergeTrees(node1?.left, node2?.left)
    newNode.right = mergeTrees(node1?.right, node2?.right)
    return newNode
};
// @lc code=end

