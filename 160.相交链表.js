/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curA = headA
    let curB = headB
    if(curA === null || curB === null) return null
    while(curA !== curB) {
        curA = curA !== null ? curA.next : headB
        curB = curB !== null ? curB.next : headA
    }
    return curA
};
// @lc code=end

