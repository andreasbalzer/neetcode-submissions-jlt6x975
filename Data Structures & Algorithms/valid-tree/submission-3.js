class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false;
        }

        const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visiting = new Set();
        const visited = new Set();
        const dfs = (node, parent) => {
            if (visiting.has(node)) {
                return false;
            }

            visiting.add(node);
            for (const nei of adj[node]) {
                if (nei === parent) {
                    continue;
                }
                if (!dfs(nei, node)) {
                    return false;
                }
            }
            visiting.delete(node);
            visited.add(node);
            return true;
        };

        return dfs(0, -1) && visited.size === n;
    }
}