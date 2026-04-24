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
        let length = 0;
        let node = head;
        while (node) {
            length++
            node = node.next;
        }

        const repeats = Math.floor(length / k);
        const remainder = length % k;

        node = new ListNode(undefined, head);
        let overallHead = undefined;
        for (let time = 0; time < repeats; time++) {
            const [newHead, endOfReversed, rest] = this.reverse(node.next, k);
            node.next = newHead;
            node = endOfReversed;
            endOfReversed.next = rest;
            if (!overallHead) {
                overallHead = newHead;
            }
        }

        return overallHead;
    }

    /**
     * Reverts a list for count nodes.
     * @returns [new head, node after reversal of old list]
     */
    reverse(start, count) {
        console.log("----");
        let prev = null;
        let node = start;
        let tmp = node.next;
        while (node && count > 0) {
            tmp = node.next;
            node.next = prev;
            prev = node;
            node = tmp;
            count--;
        }

        console.log("prev");
        console.log(prev);
        console.log("start");
        console.log(start);
        console.log("tmp");
        console.log(tmp);
        return [prev, start, tmp];
    }
}
