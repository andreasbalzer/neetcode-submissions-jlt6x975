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
        if (!list1) {
            return list2;
        }
        if (!list2) {
            return list1;
        }

        let newHead = new ListNode();
        let currentWriter = newHead;
        let current1 = list1;
        let current2 = list2;

        while (current1 && current2) {
            if (current1.val <= current2.val) {
                currentWriter.next = current1;
                current1 = current1.next;
                currentWriter = currentWriter.next;
            }
            else if (current1.val >= current2.val) {
                currentWriter.next = current2;
                current2 = current2.next;
                currentWriter = currentWriter.next;
            }
        }

        if (current1) {
            currentWriter.next = current1;
        }
        else if (current2) {
            currentWriter.next = current2;
        }

        return newHead.next;
    }
}
