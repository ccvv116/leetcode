/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
var lowestCommonAncestor = function(root, p, q) {
    let stock = [root]
    let maxVal = Math.max(p.val, q.val)
    let minVal = Math.min(p.val, q.val)
    while(stock.length) {
      let node = stock.pop()
      if(node.val >= minVal && node.val <= maxVal) return node
      if(node.right)stock.push(node.right)
      if(node.left)stock.push(node.left)
    }
};
// @lc code=end

