/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 后序遍历
var lowestCommonAncestor = function(root, p, q) {
    let result = null
    function traverse(node) {
        let inLeft = false
        let inRight = false
        if(node.left) inLeft = traverse(node.left)
        if(node.right) inRight = traverse(node.right)
        if(inLeft && inRight) {
          result = node
          return
        }
        if(node.val === p.val || node.val === q.val) {
          if(inLeft || inRight) {
            result = node
            return
          }
          return true
        }
        if(inLeft || inRight) return true
        return false
    }
    traverse(root)
    return result
};
// @lc code=end

