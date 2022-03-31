/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let result = false
    if(!root) return false
    function getPathSum(node, sum) {
        let curSum = sum + node.val
        if(!node.left && !node.right && targetSum === curSum) {
            result = true
            return
        }
        if(node.left) getPathSum(node.left, curSum)
        if(node.right) getPathSum(node.right, curSum) 
    }
    getPathSum(root, 0)
    return result
};
// @lc code=end

