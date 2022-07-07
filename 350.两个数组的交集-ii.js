/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let maxNums = []
    let minNUms = []
    if(nums1.length > nums2.length) {
        maxNums = nums1
        minNUms = nums2
    } else {
        maxNums = nums2
        minNUms = nums1
    }
    const countMap = {}
    const result = []
    for(let i = 0; i < minNUms.length; i++) {
        if(countMap[minNUms[i]]) {
            countMap[minNUms[i]]++
        } else {
            countMap[minNUms[i]] = 1
        }
    }
    for(let i = 0; i < maxNums.length; i++) {
        if(countMap[maxNums[i]]) {
            result.push(maxNums[i])
            countMap[maxNums[i]]--
        }
    }
    return result
};
// @lc code=end

