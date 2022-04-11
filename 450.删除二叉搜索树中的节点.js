/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let keyNode = null
    const stack = [root]
    let pre = null
    while(stack.length) {
      const cur = stack.pop()
      if(cur.val === key) {
        keyNode = cur
        break
      }
      pre = cur
      if(cur.right) stack.push(cur.right)
      if(cur.left) stack.push(cur.left)
    }
    const inLeft = keyNode.val === pre.left.val
    // no sub node
    if(!keyNode.left && !keyNode.right) {
      if(inLeft) {
        pre.left = null
      } else {
        pre.right = null
      }
      return root
    }
    // one sub node
    if(keyNode.left && !keyNode.right) {
      if(inLeft) {
        pre.left = keyNode.left
      } else {
        pre.right = keyNode.left
      }
      return root
    }
    if(!keyNode.left && keyNode.right) {
      if(inLeft) {
        pre.left = keyNode.right
      } else {
        pre.right = keyNode.right
      }
      return root
    }
    const right = keyNode.right
    const subcur = keyNode.left
    while(subcur.right) {
      subcur = subcur.right
    }
    subcur.right = right
    pre.left = pre.left.left
    return root
};
// @lc code=end

