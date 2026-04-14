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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const head = new ListNode();
        let l1 = list1;
        let l2 = list2;
        let h = head;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                h.next = l1;
                h = h.next;
                l1 = l1.next;
            }
            else {
                h.next = l2;
                h = h.next;
                l2 = l2.next;
            }
        }
        if (l1) {
            h.next = l1;
        }
        if (l2) {
            h.next = l2;
        }

        return head.next;
    }
}
