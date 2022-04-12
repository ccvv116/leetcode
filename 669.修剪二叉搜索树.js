/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    function traverse(node) {
        if(node === null) return node 
        const { val } = node
        if (val < low) {
            return traverse(node.right)
          }
          if (val > high) {
            return traverse(node.left)
          }
        if(node.left) node.left = traverse(node.left)
        if(node.right) node.right = traverse(node.right)
        return node
    }
    return traverse(root)
};
// @lc code=end

