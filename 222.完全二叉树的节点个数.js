/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
// 递归
var countNodes2 = function(root) {
    let count = 0
    if(!root) return 0
    function travese(node) {
        count++
        if(node.left) travese(node.left)
        if(node.right) travese(node.right)
    }
    travese(root)
    return count
};
// @lc code=end

