/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
    this.stack = []
    this.minStack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    const minVal = this.minStack[this.minStack.length - 1]
    if(minVal >= val) {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popVal = this.stack.pop()
    const minVal = this.minStack[this.minStack.length - 1]
    if(minVal === popVal) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

