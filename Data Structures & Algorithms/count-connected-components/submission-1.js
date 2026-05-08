class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const rank = new Array(n + 1).fill(1);
        const parent = new Array(n + 1).fill(0).map((_, index) => index);
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
            console.log(`${node1}/${node2}: true`);
           } 
           else {
            n--;
            console.log(`${node1}/${node2}: false`);
           }
        }

        return n;
    }
}
