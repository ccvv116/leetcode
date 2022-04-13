/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null
    function setNewNode(min, max) {
      const mid = Math.floor((min + max) / 2)
      if(min === max) return new TreeNode(nums[mid])
      let newNode = new TreeNode(nums[mid])
      if(mid !== min) newNode.left = setNewNode(min, mid - 1)
      if(mid !== max) newNode.right = setNewNode(mid + 1, max)
      return newNode
    }
    return setNewNode(0, nums.length - 1)
};
// @lc code=end

