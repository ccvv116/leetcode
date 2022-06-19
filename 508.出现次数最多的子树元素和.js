/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
var findFrequentTreeSum = function(root) {
    const sumMap = {}
    let maxCount = 0
    let result = []
    const traverse = (node) => {
        let sum = 0
        sum += node.val
        if(node.left) sum += traverse(node.left)
        if(node.right) sum += traverse(node.right)
        if(sumMap[sum]) {
            sumMap[sum]++
        } else {
            sumMap[sum] = 1
        }
        if(sumMap[sum] > maxCount) maxCount = sumMap[sum]
        return sum
    }
    traverse(root)
    for(let key in sumMap) {
        if(sumMap[key] === maxCount) result.push(key)
    }
    return result
};
// @lc code=end

