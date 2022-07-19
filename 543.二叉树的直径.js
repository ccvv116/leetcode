/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let max = 0
    const backtrack = (node) => {
        let leftDeep = node.left ? backtrack(node.left) : 0
        let rightDeep = node.right ? backtrack(node.right) : 0
        max = Math.max(max, leftDeep + rightDeep)
        return Math.max(leftDeep, rightDeep) + 1
    }
    backtrack(root)
    return max
};
// @lc code=end

