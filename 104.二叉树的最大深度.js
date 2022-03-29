/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    if (!root) return 0
    function traverseDeepth (node, deepth) {
        deepth = deepth + 1
        if (!node.left && !node.right) return deepth
        if (!node.left) return traverseDeepth(node.right, deepth)
        if (!node.right) return traverseDeepth(node.left, deepth)
        if (node.right && node.left) return Math.max(traverseDeepth(node.left, deepth), traverseDeepth(node.right, deepth))
    }
    return traverseDeepth(root, 0)
};
// @lc code=end

