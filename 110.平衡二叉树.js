/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 var isBalanced = function(root) {
    if (!root) return true
    let flag = true
    function getHeight (node, count) {
      count++
      if (!node.left && !node.right) return count
      let leftHeight = count
      let rightHeight = count
      if(node.left) leftHeight = getHeight(node.left, count)
      if(node.right) rightHeight = getHeight(node.right, count)
      if (Math.abs(leftHeight - rightHeight) > 1) flag = false
      return Math.max(leftHeight,rightHeight)
    }
    getHeight(root, 0)
    return flag
  };
// // @lc code=end

//     1
//   2   2
//  3  3
// 44