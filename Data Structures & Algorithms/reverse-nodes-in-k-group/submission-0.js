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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const countNodes = (current) => {
            let count = 0;
            while (current) {
                current = current.next;
                count++;
            }

            return count;
        };

// {1} {2} {3}
// {2} {1} {3}
        const reverse = (current, count) => {
            let prev = null;
            let originalHead = current;
            let tmp = null;
            while (current && count > 0) {
                tmp = current.next;
                current.next = prev;
                prev = current;
                current = tmp;
                count--;
            }

            originalHead.next = tmp;

            return [prev, originalHead];
        };

        const output = (head) => {
            let result = [];
            while (head) {
                result.push(head.val);
                head = head.next;
            }
            console.log(result);
        }

        const nodeCount = countNodes(head);
        const reversalCount = Math.floor(nodeCount / k);
        console.log(nodeCount + " " + reversalCount);

        
        let current = new ListNode(0, head);
        let newHead = null;
        for (let reversal = 0; reversal < reversalCount; reversal++) {
            const step = reverse(current.next, k);
            console.log("start")
            output(step[0]);
            console.log("end");
            output(step[1]);
            if (!newHead) {
                newHead = step[0];
            }
            current.next = step[0];
            current = step[1];

        }


        return newHead;
    }
}
