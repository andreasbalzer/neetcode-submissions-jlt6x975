class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const parent = new Array(edges.length).fill(0).map((_, index) => index);
        const rank = new Array(edges.length).fill(1);
        const find = (node) => {
            while (node !== parent[node]) {
                parent[node] = parent[parent[node]];
                node = parent[node];
            }
            return node;
        };

        const union = (node1, node2) => {
            const parent1 = find(node1);
            const parent2 = find(node2);

            if (parent1 === parent2) {
                return true;
            }

            if (rank[parent1] > rank[parent2]) {
                rank[parent1] += rank[parent2];
                parent[parent2] = parent1;
            }
            else {
                rank[parent2] += rank[parent1];
                parent[parent1] = parent2;
            }

            return false;
        };

        for (let [node1, node2] of edges) {
            if (union(node1, node2)) {
                return [node1, node2];
            }
        }
    }
}
