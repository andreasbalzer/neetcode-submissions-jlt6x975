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
        let current = newHead;
        let p1 = l1;
        let p2 = l2;
        let carry = 0;
        while (p1 && p2) {
            let newNode = new ListNode();
            current.next = newNode;
            newNode.val = ((p1.val + p2.val + carry) % 10);
            carry = Math.floor((p1.val + p2.val + carry) / 10);
            p1 = p1.next;
            p2 = p2.next;
            
            current = newNode;
        }

        console.log("post p1/p2");

        while (p1) {
            let newNode = new ListNode();
            current.next = newNode;
            newNode.val = ((p1.val + carry) % 10);
            carry = Math.floor((p1.val + carry) / 10);
            p1 = p1.next;
            
            current = newNode;
        }

        console.log("post p1");

        while (p2) {
            let newNode = new ListNode();
            current.next = newNode;
            newNode.val = ((p2.val + carry) % 10);
            carry = Math.floor((p2.val + carry) / 10);
            p2 = p2.next;
            
            current = newNode;
        }

        console.log("post p2");
        
        if (carry) {
            let newNode = new ListNode();
            newNode.val = carry;
            current.next = newNode;
        }

        console.log("post carry");
        
        return newHead.next;
    }
}
