class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let costs = new Array(n).fill(Infinity);
        costs[src] = 0;
        for (let i = 0; i <= k; i++) {
            console.log(`step ${k}`);
            const newCosts = [...costs];
            for (let [source, destination, cost] of flights) {
                if (newCosts[destination] > costs[source] + cost) {
                    newCosts[destination] = costs[source] + cost;
                }
            }
            console.log(costs);
            console.log(newCosts);
            costs = newCosts;
        }

        return costs[dst] === Infinity ? -1 : costs[dst];
    }
}
