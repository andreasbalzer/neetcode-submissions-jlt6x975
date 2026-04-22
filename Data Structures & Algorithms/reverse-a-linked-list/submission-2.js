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
        let node = head;
        let prev = null;
        while (node != null) {
            let tmp = node.next;
            node.next = prev;
            prev = node;
            node = tmp;
        }

        return prev;
    }
}
