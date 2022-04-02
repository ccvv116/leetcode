/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
  
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]) {
    function getTopNode(inorder, postorder) {
        let top;
        if(postorder.length) {
            top = postorder.pop()
        } else {
            return null
        }
        const topNodeIndex = inorder.indexOf(top)
        const leftInorder = inorder.slice(0, topNodeIndex)
        const rightInorder = inorder.splice(topNodeIndex + 1)
        const leftPostorder = postorder.slice(0, topNodeIndex)
        const rightPostorder = postorder.slice(topNodeIndex)
        const newNode = new TreeNode(top, getTopNode(leftInorder, leftPostorder ), getTopNode(rightInorder, rightPostorder ))
        return newNode
    }
    return getTopNode(inorder, postorder)
};
// @lc code=end

