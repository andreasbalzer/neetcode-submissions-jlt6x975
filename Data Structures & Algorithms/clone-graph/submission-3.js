/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return node;
        }
        let newNode = undefined;
        if (this.map.has(node)) {
            return this.map.get(node);
            
        }
        else {
            newNode = new Node(node.val);
            this.map.set(node, newNode);
        }
        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(this.cloneGraph(neighbor));
        }

        return newNode;
    }
}
