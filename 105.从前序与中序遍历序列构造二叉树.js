/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null
    const top = preorder.shift()
    const midIndex = inorder.indexOf(top)
    const leftInorder = inorder.slice(0, midIndex)
    const rightInorder = inorder.slice(midIndex + 1)
    const leftPreorder = preorder.slice(0, midIndex)
    const rightPreorder = preorder.slice(midIndex)
    const newNode = new TreeNode(top)
    newNode.left = buildTree(leftPreorder, leftInorder)
    newNode.right = buildTree(rightPreorder, rightInorder)
    return newNode
};
// @lc code=end

