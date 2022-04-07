/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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

// 搜索二叉树是有序的 遍历排序后就变得简单了
var getMinimumDifference = function(root) {
    function traversal (node) {
        if(!node.left && !node.right) return [node.val]
        const result = []
        if(node.left) result.push(...traversal(node.left))
        result.push(node.val) 
        if(node.right) result.push(...traversal(node.right))
        return result
    }
    const arr = traversal(root)
    let mindiff;
    for(let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i]
        if (!mindiff) mindiff = diff
        if(diff < mindiff) mindiff = diff
    }
    return mindiff
};
// @lc code=end

