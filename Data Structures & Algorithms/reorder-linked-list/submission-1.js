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

        // 0,1,2,3,4,5
        const middle = findLeftOfMiddle(head);
        const reversed = reverse(middle.next);
        
        const newHead = new ListNode();
        let newHeadPointer = newHead;
        let reversedPointer = reversed;
        middle.next = null;
        console.log("foobar");
        while (head && reversedPointer) {
            console.log(head);
            newHeadPointer.next = head;
            newHeadPointer = newHeadPointer.next;
            head = head.next;
            
            newHeadPointer.next = reversedPointer;
            newHeadPointer = newHeadPointer.next;
            reversedPointer = reversedPointer.next;
        }

        if (head) {
            newHeadPointer.next = head;
        }
        if (reversedPointer) {
            newHeadPointer.next = reversedPointer;
        }

        return newHead.next;
    }
}
