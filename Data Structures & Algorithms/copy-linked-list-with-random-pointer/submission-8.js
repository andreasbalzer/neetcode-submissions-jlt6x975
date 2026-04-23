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
        let node = head;
        while (node) {
            const tmp = node.next;
            node.next = new Node(node.val, tmp, node.random);
            node = node.next;
            if (node) {
                node = node.next;
            }
        }

        node = head;
        while (node) {
            const nextNodeOfList1 = node.next.next;
            node.next.random = node.next.random?.next ?? null;
            node = nextNodeOfList1;
        }

        node = head;
        const head2 = head.next;
        while (node) {
            console.log(`Looking at ${node.val}`)
            const nodeList2 = node.next;
            const nextNodeList1 = nodeList2?.next ?? null;
            const nextNodeList2 = nextNodeList1?.next ?? null;
            node.next = nextNodeList1;
            nodeList2.next = nextNodeList2;

            node = node.next;
        }

        return head2;
    }
}
