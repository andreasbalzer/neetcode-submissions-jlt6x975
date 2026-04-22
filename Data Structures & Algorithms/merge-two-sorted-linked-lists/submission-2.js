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
        const newHead = new ListNode();
        let newPointer = newHead;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                newPointer.next = list1;
                list1 = list1.next;
            }
            else {
                newPointer.next = list2;
                list2 = list2.next;
            }
            newPointer = newPointer.next;
        }

        if (list1) {
            newPointer.next = list1;
        }
        else if (list2) {
            newPointer.next = list2;
        }

        return newHead.next;
    }
}
