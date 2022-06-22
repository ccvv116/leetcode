/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let cur = head
    let vals = []
    while(cur) {
        vals.push(cur.val)
        cur = cur.next
    }
    for(let i = 0; i < vals.length - 1 - i; i++) {
        if(vals[i] !== vals[vals.length - 1 - i]) return false
    }
    return true
};
// @lc code=end

