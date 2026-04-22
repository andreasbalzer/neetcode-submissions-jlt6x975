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
         *        s     f
         * [0, 1, 2, 3]
         *        s     f
         */
        const findMiddleNode = () => {
            let slow = head;
            let fast = head;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
            console.log("find middle");
            console.log(slow);
            return slow;
        };

        const reverse = (startNode) => {
            console.log("reverse");
            console.log(startNode);
            let prev = null;
            let node = startNode;
            while (node) {
                const tmp = node.next;
                node.next = prev;
                prev = node;
                node = tmp;
            }
            
            
            console.log(prev);
            return prev;
        };

        const merge = (list1, endNode, list2) => {
            const newHead = new ListNode();
            let node = newHead;
            let pick = 1;
            while (list2) {
                if (pick === 1 && list1 !== endNode) {
                    node.next = list1;
                    list1 = list1.next;
                    pick = 2;
                }
                else {
                    node.next = list2;
                    list2 = list2.next;
                    pick = 1;
                }
                node = node.next;
            }

            console.log(newHead);
            return newHead;
        };

        const middleNode = findMiddleNode();
        return merge(head, middleNode, reverse(middleNode));

    }
}
