/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


class Stack {
    constructor() {
        this.quene = []
    }
    enquene (n) {
        while (n > this.quene[this.size()-1] && this.quene[this.size()-1] !== undefined) {
            this.quene.pop()
        }
        this.quene.push(n)
    }
    dequene (n) {
        if(n === this.top()) {
            this.quene.shift()
        }
    }
    top () {
        return this.quene[0]
    }
    size () {
        return this.quene.length
    }
}

var maxSlidingWindow = function(nums, k) {
    const resArr = []
    const stack = new Stack()
    let backPoint = 0
    let forntPoint = 0
    while (backPoint < k) {
        stack.enquene(nums[backPoint++])
    }
    resArr.push(stack.top())
    while (backPoint < nums.length) {
        stack.enquene(nums[backPoint++])
        stack.dequene(nums[forntPoint++])
        resArr.push(stack.top())
    }
    return resArr
};
// @lc code=end

