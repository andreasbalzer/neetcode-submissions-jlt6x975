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
        this.visited = new Set();
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
            newNode = this.map.get(node);
            if (this.visited.has(newNode)) {
                return newNode;
            }
        }
        else {
            newNode = new Node(node.val);
            this.map.set(node, newNode);
        }
        this.visited.add(newNode);
        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(this.cloneGraph(neighbor));
        }

        return newNode;
    }
}
