/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
// 中序遍历 + 前后指针对比
var findMode = function(root) {
    let pre = {};
    let count = 0
    let max = 0
    let result = []
    function traversal (node) {
        if(node.left) traversal(node.left)
        if(node.val === pre.val) {
            count++
            if(count === max) {
                result.push(pre.val)
            }
            if(count > max) {
                max = count
                result = [node.val]
            }

        } else {
            count = 1
            if (count >= max) result.push(node.val)
            pre = node
        }
        if(node.right) traversal(node.right)
    }
    traversal(root)
    return result
};
// @lc code=end

