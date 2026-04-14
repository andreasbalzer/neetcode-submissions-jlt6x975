// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) {
            return head;
        }

        let l1 = head;
        while (l1) {
            const l2 = new Node(l1.val);
            l2.next = l1.next;
            l1.next = l2;
            l1 = l2.next;
        }

        l1 = head;
        while (l1) {
            console.log("b");
            if (l1.random) {
                l1.next.random = l1.random.next;
            }
            l1 = l1.next.next;
        }
        console.log("a");
        l1 = head;
        const newHead = head.next;
        
        while (l1) {
            const l2 = l1.next;
            l1.next = l2.next;
            l2.next = l2.next ? l2.next.next : null; 
            l1 = l1.next;
        }

        return newHead;
    }
}
