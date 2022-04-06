/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(!nums.length) return null
    const orderNums = [...nums].sort((a, b) => a - b)
    const max = orderNums.pop()
    const index = nums.indexOf(max)
    const left = nums.slice(0, index)
    const right = nums.slice(index + 1)
    const node = new TreeNode(max)
    node.left = constructMaximumBinaryTree(left)
    node.right = constructMaximumBinaryTree(right)
    return node
};
// @lc code=end

