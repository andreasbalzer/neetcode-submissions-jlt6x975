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
        /*
            find middle
            reverse second part
            build result
        */

        const findLeftOfMiddle = () => {
            /*
            {0, 1, 2, 3}
                s  F
            */
            let pSlow = head;
            let pFast = head;
            while (pFast && pFast.next && pFast.next.next) {
                pSlow = pSlow.next;
                pFast = pFast.next.next;
            }

            return pSlow;
        };

        const reverse = (head) => {
            let prev = null;
            let current = head;
            while (current) {
                const tmp = current.next;
                current.next = prev;
                prev = current;
                current = tmp;
            }

            return prev;
        };

        const leftOfMiddle = findLeftOfMiddle();
        let reversedHead = reverse(leftOfMiddle.next);
        
        leftOfMiddle.next = null;
        console.log(head);
        console.log(reversedHead);

        const newHead = new ListNode();
        let writer = newHead;
        let first = head;
        let second = reversedHead;
        while (first && second) {
            const tmp1 = first.next;
            const tmp2 = second.next;
            writer.next = first;
            writer = writer.next;
            writer.next = second;
            writer = writer.next;
            first = tmp1;
            second = tmp2;
        }

        if (first) {
            writer.next = first;
        }
        
        return newHead.next;        
    }
}
