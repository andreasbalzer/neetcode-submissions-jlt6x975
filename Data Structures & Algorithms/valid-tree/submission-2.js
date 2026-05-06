class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const parent = new Array(n + 1).fill(0).map((value, index) => index);
        const rank = new Array(n + 1).fill(1);
        let components = n;
        const find = (node) => {
            while (parent[node] !== node) {
                parent[node] = parent[parent[node]];
                node = parent[node];
            }

            return node;
        };

        const union = (node1, node2) => {
            const p1 = find(node1);
            const p2 = find(node2);

            if (p1 === p2) {
                return true;
            }


            components--;
            if (rank[p1] > rank[p2]) {
                rank[p1] += rank[p2];
                parent[p2] = p1;
            }
            else {
                rank[p2] += rank[p1];
                parent[p1] = parent[p2];
            }

            return false;
        };

        for (let [node1, node2] of edges) {
            if (union(node1, node2)) {
                return false;
            }
        }

        return components === 1;
    }
}
