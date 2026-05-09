class Heap {
    constructor(accessor) {
        this.data = [];
        this.accessor = accessor;
        this.size = 0;
    }

    enqueue(value) {
        this.data.push(value);
        this.size++;
    }
    
    dequeue() {
        if (this.data.length === 0) {
            return undefined;
        }
        this.size--;
        this.data.sort((a, b) => this.accessor(a) - this.accessor(b));
        return this.data.shift();
    }
}

class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const map = new Map();
        times.forEach((time) => {
            if (!map.has(time[0])) {
                map.set(time[0], []);
            }
            map.get(time[0]).push([time[1], time[2]]);
        })

        // [destination, time]
        const visit = new Set();
        const heap = new Heap((item) => item[1]);
        heap.enqueue([k, 0]);
        let result = 0;
        while (heap.size) {
            const time = heap.dequeue();
            if (visit.has(time[0])) {
                continue;
            }
            visit.add(time[0]);
            result = time[1];
            for (let neighbour of (map.get(time[0]) || [])) {
                if (!visit.has(neighbour[0])) {
                    heap.enqueue([neighbour[0], neighbour[1] + time[1]]);
                }
            }
        }

        return visit.size === n ? result : -1;


        /*let dist = new Array(n + 1).fill(Number.POSITIVE_INFINITY);
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
        */
    }
}
