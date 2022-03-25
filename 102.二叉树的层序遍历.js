/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
// 迭代法 层序遍历 广度遍历
var levelOrder = function(root) {
    if (!root) return []
    const stack = [root]
    const result = []
    while (stack.length) {
        const size = stack.length
        const curLevel = []
        for(let i = 0; i < size; i++) {
            // 头出尾进
            const curNode = stack.shift()
            curLevel.push(curNode.val)
            if(curNode.left) stack.push(curNode.left)
            if(curNode.right) stack.push(curNode.right)     
        }
        result.push(curLevel)
    }
    return result
};
// 递归法 前序
var levelOrder2 = function(root) {
    if (!root) return []
    function traverse(node, level, res) {
        if (!node) return res
        if(!res[level]) res[level] = []
        res[level].push(node.val)
        level++
        res = traverse(node.left, level, res)
        res = traverse(node.right, level, res)
        return res
    }
    return traverse(root, 0, [])
};

// @lc code=end

