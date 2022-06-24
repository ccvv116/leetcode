/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
    if(!root) return []
    let stack = [root]
    const maxVals = []
    while(stack.length) {
        let max = -Infinity
        let newStack = []
        for(let i = 0; i < stack.length; i++) {
            if(max < stack[i].val) max = stack[i].val
            const left = stack[i].left
            const right = stack[i].right
            if(left) newStack.push(left)
            if(right) newStack.push(right)
        }
        maxVals.push(max)
        stack = newStack
    }
    return maxVals
};
// @lc code=end

