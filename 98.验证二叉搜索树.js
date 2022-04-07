/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function isValidNode(node, min, max) {
        if(!node) return true
        const val = node.val
        if(node.left && typeof min === 'number' && node.left.val <= min) return false
        if(node.right && typeof max === 'number' && node.right.val >= max) return false
        if(node.left && val <= node.left.val) return false
        if(node.right && val >= node.right.val) return false
        return isValidNode(node.left, min, val) && isValidNode(node.right, val, max)
      }
      return isValidNode(root)
};
// @lc code=end

