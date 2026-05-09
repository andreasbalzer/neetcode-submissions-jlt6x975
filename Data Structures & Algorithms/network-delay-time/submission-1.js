class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let dist = new Array(n + 1).fill(Number.POSITIVE_INFINITY);
        dist[k] = 0;
        dist[0] = 0;
        for (let index = 0; index < n; index++) {
            for (const [u, v, w] of times) {
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }


        const maxDist = Math.max(...dist);
        return maxDist === Number.POSITIVE_INFINITY ? -1 : maxDist;

    }
}
