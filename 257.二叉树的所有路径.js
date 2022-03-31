/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return []
    const result = []
    function traverse(node, path) {
        if (path) {
            path = `${path}->${node.val}`
        } else {
            path = `${node.val}`
        }
        if (!node.left && !node.right) result.push(path)
        if (node.left) traverse(node.left, path)
        if (node.right) traverse(node.right, path)
    }
    traverse(root)
    return result
};
// @lc code=end

