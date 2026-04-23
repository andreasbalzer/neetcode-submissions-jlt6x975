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
        const map = new Map();
        map.set(null, null);
        let node = head;
        while (node) {
            if (!map.has(node)) {
                map.set(node, new Node(node.val));
            }
            if (!map.has(node.next) && node.next) {
                map.set(node.next, new Node(node.next.val));
            }
            if (!map.has(node.random) && node.random) {
                map.set(node.random, new Node(node.random.val));
            }
            map.get(node).next = map.get(node.next);
            map.get(node).random = map.get(node.random);

            node = node.next;
        }

        return map.get(head);
    }
}
