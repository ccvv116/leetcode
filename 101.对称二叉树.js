/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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

// 首尾对比
var isSymmetric = function(root) {
    if (!root) return true
    if (root.left === null && root.right === null) return true
    if (!!root.left === !root.right) return false
    // 保持栈对称
    const stack = [root.left, root.right]
    while(stack.length) {
        // 首部尾部同时出栈
        const rightNode = stack.pop()
        const leftNode = stack.shift()
        // 条件判断
        if (rightNode.val !== leftNode.val) return false
        if (!!rightNode.right === !leftNode.left) return false
        if (!!rightNode.left === !leftNode.right) return false
        // 对称入栈
        rightNode.right && stack.push(rightNode.right)
        rightNode.left && stack.push(rightNode.left)
        leftNode.left && stack.unshift(leftNode.left)
        leftNode.right && stack.unshift(leftNode.right)
    }
    return stack.length === 0
};
// @lc code=end

//    1
//   2  2
// 3 4  4 3