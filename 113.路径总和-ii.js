/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = []
    if(!root) return result
    function getPathArr(node, sum, pathArr = []) {
        let curSum = sum + node.val
        let curPathArr = [...pathArr,node.val]
        if(!node.left && !node.right && curSum === targetSum) {
            result.push(curPathArr)
            return
        }
        if(node.left) getPathArr(node.left, curSum, curPathArr)
        if(node.right) getPathArr(node.right, curSum, curPathArr)
    }
    getPathArr(root, 0, [])
    return result
};
// @lc code=end

