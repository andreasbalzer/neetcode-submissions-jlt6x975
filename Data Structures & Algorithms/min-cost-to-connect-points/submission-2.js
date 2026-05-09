class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const manhatten = (a, b) => {
            return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
        };

        const visit = new Array(points.length).fill(false);
        const costs = new Array(points.length).fill(Infinity);
        costs[0] = 0;
        let result = 0;
        for (let index = 0; index < points.length; index++) {
            let currentPoint = -1;
            for (let index2 = 0; index2 < points.length; index2++) {
                if (!visit[index2] && (currentPoint === -1 || costs[index2] < costs[currentPoint])) {
                    currentPoint = index2;
                }
                
            }

                result += costs[currentPoint];
                visit[currentPoint] = true;

            for (let index3 = 0; index3 < points.length; index3++) {
                if (!visit[index3]) {
                    const newCost = manhatten(points[currentPoint], points[index3]);
                    if (costs[index3] > newCost) {
                        costs[index3] = newCost;
                    }
                }
            }
        }

        return result;
    }
}