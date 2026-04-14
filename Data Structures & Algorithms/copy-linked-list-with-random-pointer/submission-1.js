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

        const storage = new Map();
        let current = head;
        while (current) {
            storage.set(current, new Node(current.val));
            current = current.next;
        }

        current = head;
        while (current) {
            const newNode = storage.get(current);
            newNode.next = current.next ? storage.get(current.next) : null;
            newNode.random = current.random ? storage.get(current.random) : null;
            current = current.next;
        }

        return storage.get(head);
    }
}
