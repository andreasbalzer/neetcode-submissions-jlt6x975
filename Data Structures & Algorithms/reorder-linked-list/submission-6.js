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
     * @return {void}
     */
    reorderList(head) {
        /**
         * [0, 1, 2, 3, 4]
         *        s        f
         * [0, 1, 2, 3]
         *     s     f
         */
        const findMiddleNode = () => {
            let slow = head;
            let fast = head.next;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
            const next = slow.next;
            slow.next = null;
            return next;
        };

        const reverse = (startNode) => {
            let prev = null;
            let node = startNode;
            while (node) {
                const tmp = node.next;
                node.next = prev;
                prev = node;
                node = tmp;
            }
            
            return prev;
        };

        const merge = (list1, list2) => {
            while (list2) {
                const tmp1 = list1.next;
                const tmp2 = list2.next;
                list1.next = list2;
                list2.next = tmp1;
                list1 = tmp1;
                list2 = tmp2;
            }
        };

        const middleNode = findMiddleNode();
        const reversed = reverse(middleNode);
        merge(head, reversed);

    }
}
