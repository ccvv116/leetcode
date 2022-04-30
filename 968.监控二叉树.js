/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
var minCameraCover = function(root) {
    let result = 0
    if(!root.left && !root.right) return 1
    // 返回当前节点的子节点的检控数量0无覆盖，1有覆盖，2有监控
    let traverse = (node) => {
        // 无左右节点
        if(!node.left && !node.right) return 0
        let leftState
        let rightState
        if(node.left) leftState = traverse(node.left)
        if(node.right) rightState = traverse(node.right)
        // 有一个子节点没有被监控覆盖，本节点加摄像头
        if(leftState === 0 || rightState === 0) {
            result++
            return 2
        }
        // 有被覆盖到
        if(leftState === 2 || rightState === 2) return 1
        // 没有被覆盖
        if(leftState !== 2 && rightState !== 2) {
            // 根节点处理
            if(node === root) result++
            return 0
        }
    }
    traverse(root)
    return result
};
// @lc code=end

