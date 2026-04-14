/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 * 
 * 3   2   1
 * {}->{}->{}
 * l   r
 *     l   r
 * 
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);
        let left = dummy
        let right = head;

        while (n > 0) {
            right = right.next;
            n--;
        }

        while (right) {
            left = left.next;
            right = right.next;
        }

        
        left.next = left.next?.next;
        
        return dummy.next;
    }
}
