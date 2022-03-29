/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 层序遍历
var minDepth2 = function(root) {
    let stack = [root]
    let count = 0
    if (!root) return 0
    while(stack.length) {
        const temp = []
        count++
        const size = stack.length
        for(let i = 0; i < size; i++) {
            const node = stack.pop()
            if (!node.left && !node.right) return count
            node.left && temp.push(node.left)
            node.right && temp.push(node.right)
        }
        stack = temp
    }
    return count
};

// 递归
var minDepth = function(root) {
    if (!root) return 0
    function getDepth(node, count) {
        count = count + 1
        if (!node.left && !node.right) return count
        if (node.left && node.right) return Math.min(getDepth(node.left, count), getDepth(node.right, count))
        if (node.left) return getDepth(node.left, count)
        if (node.right) return getDepth(node.right, count)
    }
    return getDepth(root, 0)
};
// @lc code=end

