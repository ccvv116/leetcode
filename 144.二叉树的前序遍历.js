/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// 递归法
// var preorderTraversal = function(root) {
//     function traverse(node, result) {
//         if (!node) return result
//         result.push(node.val)
//         result = traverse(node.left, result)
//         result = traverse(node.right, result)
//         return result
//     }
//     return traverse(root, [])
// };
// 迭代法
var preorderTraversal = function(root) {
    const stack = [root]
    const result = []
    if (!root) return []
    while (stack.length) {
        const curNode = stack.pop() 
        result.push(curNode.val)
        if (curNode.right) stack.push(curNode.right)
        if (curNode.left) stack.push(curNode.left)
    }
    return result
};

// @lc code=end

