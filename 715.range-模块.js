/*
 * @lc app=leetcode.cn id=715 lang=javascript
 *
 * [715] Range 模块
 */

// @lc code=start

var RangeModule = function() {
    this.head = null
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
    if(!this.head) {
        this.head = {
            left,
            right,
            next: null
        }
        return
    }
    let cur = this.head
    if(cur.left > right) {
        this.head = {
            left,
            right,
            next: cur
        }
        return
    }
    let start = null
    while(cur) {
        // 某个区间内无需操作
        if(left >= cur.left && right <= cur.right) {
            return
        }
        // left超过本节点left做标记
        if(left >= cur.left) {
            start = cur
        }
        // right在本节点之前
        if(right < cur.left) {
            if(start) {
                // 增加节点
                if(left > start.right) {
                    start.next = {
                        left,
                        right,
                        next: cur
                    }
                } else {
                    // 加长节点
                    start.right = right
                    start.next = cur
                }
            } else {
                this.head = {
                    left,
                    right,
                    next: cur
                }
            }
            return
        }
        // right在本节点之中
        if(right <= cur.right) {
            if(start) {
                if(left > start.right) {
                    // 加长本节点
                    cur.left = left
                    start.next = cur
                } else {
                    // 合并节点
                    start.right = cur.right
                    start.next = cur.next
                }
            } else {
                this.head = {
                    left,
                    right: cur.right,
                    next: cur.next
                }
            }
            return
        }
        if(!cur.next) {
            if(start) {
                if(left > start.right) {
                    start.next = {
                        left,
                        right,
                        next: null
                    }
                } else {
                    // 合并节点
                    start.right = right
                    start.next = null
                }
            } else {
                this.head = {
                    left,
                    right,
                    next: null
                }
            }
            return
        }
        cur = cur.next
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
    if(!this.head) return false
    let cur = this.head
    if(right < cur.left) return false
    while(cur) {
        if(left >= cur.left && right <= cur.right) return true
        if(cur.left >= right) return false
        cur = cur.next
    }
    // console.log(this.head)
    return false
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
    if(!this.head) return null
    let cur = this.head
    if(cur.left >= right) return null
    let pre = null
    while(cur) {
        // 区间之外
        if(cur.left >= right) return null
        if(cur.right <= left) {
            pre = cur
            cur = cur.next
            continue
        }
        // 本节点在删除区间之内
        if(left <= cur.left && right >= cur.right) {
            if(pre) {
                pre.next = cur.next
            } else {
                this.head = cur.next
            }
            cur = cur.next
            continue
        // 删除区间在本节点之内
        } else if (left > cur.left && right < cur.right) {
            let temp = cur.right
            cur.right = left
            cur.next = {
                left: right,
                right: temp,
                next: cur.next
            }
        } else if(cur.left >= left) {
            cur.left = right
        } else if(cur.right <= right) {
            cur.right = left
        }
        pre = cur
        cur = cur.next
    }
    return null
};

// const methods = ['addRange', 'removeRange', 'addRange', "removeRange",'queryRange']
// const params = [[0,1000],[1,8],[77,80],[0,1000],[0,2]]

// var obj = new RangeModule()
// methods.forEach((method, i) => {
//     // console.log(method)
//     console.log(`------${i}-----`)
//     console.log(obj.head)
//     console.log(`${method}:${params[i]}`)
//     console.log('result: ======', obj[method](params[i][0], params[i][1]))
//     console.log('-----------')
// });
/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
// @lc code=end

