class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const queue = [];
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[0].length; x++) {
                if (grid[y][x] === 0) {
                    queue.push([y, x]);
                }
            }
        }

        let distance = 0;
        let visited = new Set();
        while (queue.length) {
            const length = queue.length;
            for (let index = 0; index < length; index++) {
                const [y, x] = queue.shift();
                console.log(`${y} ${x}`);
                if (grid[y][x] === -1 ||(grid[y][x] === 0 && distance > 0) || visited.has(`${y}-${x}`)) {
                    continue;
                }

                visited.add(`${y}-${x}`)

                if (grid[y][x] < distance && grid[y][x] > 0) {
                    continue;
                }

                if (grid[y][x] > distance) {
                    grid[y][x] = distance;
                }

                if (y > 0) {
                    queue.push([y - 1, x]);
                }
                if (y < grid.length - 1) {
                    queue.push([y + 1, x]);
                }

                if (x > 0) {
                    queue.push([y, x - 1]);
                }
                if (x < grid[0].length - 1) {
                    queue.push([y, x + 1]);
                }
            }
            distance++;
        }
    }
}
