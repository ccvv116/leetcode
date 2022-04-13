/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let total = 0
    if(!root) return root
    function traverse(node) {
      if(node.right) node.right = traverse(node.right)
      node.val = node.val + total
      total = node.val
      if(node.left) {
        node.left = traverse(node.left)
      }
      return node
    }
    return traverse(root)
};
// @lc code=end

