/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, target) {
    if(root.val === target) {
        return root
    }
    if(target > root.val && root.right) return searchBST(root.right,target)
    if(target < root.val && root.left) return searchBST(root.left,target)
    return null
};
// @lc code=end

