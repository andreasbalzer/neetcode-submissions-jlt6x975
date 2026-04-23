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
            return null;
        }

        const map = new Map();
        let node = head;
        while (node) {
            map.set(node, new Node(node.val));
            node = node.next;
        }

        node = head;
        while (node) {
            const newNode = map.get(node);
            console.log(node);
            console.log(newNode);
            newNode.next = node.next ? map.get(node.next) : null;
            newNode.random = node.random ? map.get(node.random) : null;
            node = node.next;
        }

        return map.get(head);
    }
}
