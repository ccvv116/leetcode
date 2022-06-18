/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
 var insert = function(head, insertVal) {
    if(head === null) {
        const newNode = new Node(insertVal, null)
        newNode.next = newNode
        return newNode
    }
    let cur = head.next
    let pre = head
    const newNode = new Node(insertVal, null)
    while(cur !== head) {
        if(cur.val < pre.val) {
            if(insertVal >= pre.val || insertVal <= cur.val) {
                pre.next = newNode
                newNode.next = cur
                break
            }
        }
        if(insertVal >= pre.val && insertVal <= cur.val) {
            pre.next = newNode
            newNode.next = cur
            break
        }
        pre = cur
        cur = cur.next
    }
    pre.next = newNode
    newNode.next = cur
    return head
};