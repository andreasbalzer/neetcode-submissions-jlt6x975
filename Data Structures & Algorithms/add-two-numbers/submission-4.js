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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = new ListNode();
        const newHead = head;
        let carry = 0;
        while (l1 && l2) {
            head.next = new ListNode((l1.val + l2.val + carry) % 10);
            carry = Math.floor((l1.val + l2.val + carry)/10);
            head = head.next;
            l1 = l1.next;
            l2 = l2.next;
        }

        while (l1) {
            head.next = new ListNode((l1.val + carry) % 10);
            carry = Math.floor((l1.val + carry) / 10);
            head = head.next;
            l1 = l1.next;
        }

        while (l2) {
            head.next = new ListNode((l2.val + carry) % 10);
            carry = Math.floor((l2.val + carry) / 10);
            head = head.next;
            l2 = l2.next;
        }

        if (carry) {
            head.next = new ListNode(carry);
        }

        return newHead.next;
    }
}
