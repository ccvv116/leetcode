/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     if(!head) return false
//     let index = -1
//     let cur = head
//     while(cur.next) {
//         if(cur.pos) return true
//         cur.pos = index++
//         cur = cur.next
//     }
//     return false
// };

// 快慢指针
var hasCycle = function(head) {
    if(!head) return false
    let fast = head
    let slow = head
    do {
        if(!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
        if(slow === fast) return true
    } while ((slow !== head))

    return false
};
// @lc code=end

