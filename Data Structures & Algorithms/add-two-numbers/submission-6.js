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
        const newHead = new ListNode();
        let node = newHead;
        let carry = 0;
        while (l1 && l2) {
            node.next = new ListNode();
            node.next.val = (l1.val + l2.val + carry) % 10;
            carry = Math.floor((l1.val + l2.val + carry) / 10);
            
            l1 = l1.next;
            l2 = l2.next;
            node = node.next;
        } 
        
        while (l1) {
            node.next = new ListNode();
            node.next.val = (l1.val + carry) % 10;
            carry = Math.floor((l1.val + carry) / 10);
            
            l1 = l1.next;
            node = node.next;
        }

        while (l1) {
            node.next = new ListNode();
            node.next.val = (l1.val + carry) % 10;
            carry = Math.floor((l1.val + carry) / 10);
            
            l1 = l1.next;
            node = node.next;
        }

        while (l2) {
            node.next = new ListNode();
            node.next.val = (l2.val + carry) % 10;
            carry = Math.floor((l2.val + carry) / 10);
            
            l2 = l2.next;
            node = node.next;
        }

        if (carry) {
            node.next = new ListNode(carry);
        }

        return newHead.next;
    }
}
