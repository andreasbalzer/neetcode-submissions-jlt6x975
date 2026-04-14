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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        
        let current = head;
        while (current != null) {
            const tmp = current.next;
            current.next = prev;
            prev = current;
            current = tmp;
        }

        return prev;
    }

    /**
     * null -> A -> B -> null
     *         B -> A -> null
     */
}
