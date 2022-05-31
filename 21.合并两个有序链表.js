/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null) return list2
    if(list2 === null) return list1
    let newList = new ListNode()
    let cur = newList
    while(true) {
        let val1 = list1.val
        let val2 = list2.val
        if(val1 >= val2) {
            cur.next = new ListNode(val2)
            if(!list2.next) {
                cur.next.next = list1
                break
            }
            list2 = list2.next
        } else {
            cur.next = new ListNode(val1)
            if(!list1.next) {
                cur.next.next = list2
                break
            }
            list1 = list1.next
        }
        cur = cur.next
    }
    return newList.next
};
// @lc code=end

