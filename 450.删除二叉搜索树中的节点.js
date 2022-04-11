/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return root
    // 删除节点
    function getNewNode(oldNode) {
      if(oldNode.left && !oldNode.right) return oldNode.left
      if(oldNode.right && !oldNode.left) return oldNode.right
      if(!oldNode.left && !oldNode.right) return null
      let leftNode = oldNode.left
      let rightNode = oldNode.right
      let cur = rightNode
      while(cur.left) {
        cur = cur.left
      }
      cur.left = leftNode
      return rightNode
    }
    // 后序遍历
    function traverse(node) {
      let left = null
      let right = null
      if(node.left) {
        left = traverse(node.left)
        node.left = left
      }
      if(node.right) {
        right = traverse(node.right)
        node.right = right
      }
      
      if(node.val === key) {
        node = getNewNode(node)
      }
      return node
    }
    return traverse(root)
};
// @lc code=end