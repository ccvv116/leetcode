/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let c1 = l1
    let c2 = l2
    let l3 = new ListNode()
    let c3 = l3
    let carry = 0
    while(c1 || c2 || carry) {
        let v1 = c1?.val || 0
        let v2 = c2?.val || 0
        let val = v1 + v2 + carry
        carry = Math.floor(val / 10)
        c3.val = val % 10
        c3.next = c1?.next || c2?.next || carry ? new ListNode() : null
        if (c1) c1 = c1.next
        if (c2) c2 = c2.next
        c3 = c3.next
    }
    return l3
};
// @lc code=end

