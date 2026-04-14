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
        /*
        {a} -> {b} -> {c}

        a.next = null
        b.next = a

        prev
        cur
        next

        */

        let current = head; 
        let prev = null;
        while (current != null) {
          const tmpNext = current.next;
          current.next = prev;
          prev = current;
          current = tmpNext;  
        }

        return prev;

    }
}
 