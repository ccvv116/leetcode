/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const length = nums.length
    if(length < 2) return length
    let diff;
    let count = 0
    for(let i = 0; i < length; i++) {
        // 与上一个数的差值
        let curDiff = nums[i] - nums[i - 1]
        // 与上一个数相等记录删除节点并跳过
        if(curDiff === 0) {
            count++
            continue
        }
        // 与上一个数同方向记录删除节点
        if(diff !== undefined && diff * curDiff >= 0) count++
        diff = curDiff
    }
    return length - count
};
// @lc code=end

