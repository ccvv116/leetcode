/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
    if (!root) return 0
    let sum = 0
    function countLeftLeaves (node, direction = '') {
        if(!node.left && !node.right && direction === 'left') {
            sum += node.val
            return
        }
        node.left && countLeftLeaves(node.left, 'left')
        node.right && countLeftLeaves(node.right, 'right')
    }
    countLeftLeaves(root)
    return sum
};
// @lc code=end

