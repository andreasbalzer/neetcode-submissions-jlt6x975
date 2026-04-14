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
        storage.set(null, null);
        while (current) {
            if (!storage.has(current)) {
                storage.set(current, new Node(0));
            }
            storage.get(current).val = current.val;
 
            if (!storage.has(current.next)) {
                storage.set(current.next, new Node(0));
            }
            storage.get(current).next = storage.get(current.next);

            if (!storage.has(current.random)) {
                storage.set(current.random, new Node(0));
            }
            storage.get(current).random = storage.get(current.random);
 

            current = current.next;
        }

        return storage.get(head);
    }
}
