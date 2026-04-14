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
        let fast = head;
        head = new ListNode(null, head);
        
        while (n > 0) {
            fast = fast.next;
            n--;
        }

        let slow = head;
        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }

        console.log(fast);

        slow.next = slow.next.next;
        return head.next;
    }
}
