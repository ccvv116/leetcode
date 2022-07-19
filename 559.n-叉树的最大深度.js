/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    const backtrack = (node) => {
        let deepest = 0
        for(let i = 0; i < node.children.length; i++) {
            let curdeep = node.children[i] ? backtrack(node.children[i]) : 0
            deepest = Math.max(deepest, curdeep)
        }
        return deepest + 1
    }
    return backtrack(root)
};
// @lc code=end

