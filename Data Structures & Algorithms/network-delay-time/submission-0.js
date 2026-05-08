class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let dist = new Array(n).fill(Number.POSITIVE_INFINITY);
        dist[k - 1] = 0;
        for (let index = 0; index < n - 1; index++) {
            for (const [u, v, w] of times) {
                if (dist[u - 1] + w < dist[v - 1]) {
                    dist[v - 1] = dist[u - 1] + w;
                }
            }
        }


        const maxDist = Math.max(...dist);
        return maxDist === Number.POSITIVE_INFINITY ? -1 : maxDist;

    }
}
