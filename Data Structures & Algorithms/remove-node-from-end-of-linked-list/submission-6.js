/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let oldHead = new ListNode();
        oldHead.next = head;
        let left = oldHead;
        let right = oldHead;

        for (let i = 0; i < n; i++) {
            right = right.next;
        }

        while (right && right.next) {
            left = left.next;
            right = right.next;
        }

        left.next = left.next?.next;

        return oldHead.next;
    }
}
