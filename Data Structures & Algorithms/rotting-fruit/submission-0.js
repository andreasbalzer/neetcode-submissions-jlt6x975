class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let freshFruit = 0;
        const queue = [];
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[0].length; x++) {
                if (grid[y][x] === 2) {
                    queue.push([y, x]);
                }
                if (grid[y][x] === 1) {
                    freshFruit++;
                }
            }
        }

        if (freshFruit === 0) {
            return 0;
        }

        let time = -1;
        while (queue.length) {
            const size = queue.length;
            for (let index = 0; index < size; index++) {
                const [y, x] = queue.shift();
                console.log(`${y} ${x} ${grid[y][x]}`)
                if (grid[y][x] === 0) {
                    continue;
                }
                if (grid[y][x] === 2 ) {
                    console.log(`Found fresh ${y} ${x}`);
                    
                    if (y > 0 && grid[y - 1][x] === 1) {
                        grid[y - 1][x] = 2;
                        queue.push([y - 1, x]);
                        freshFruit--;
                    }
                    if (x > 0  && grid[y][x - 1] === 1) {
                        grid[y][x - 1] = 2;
                        queue.push([y, x - 1]);
                        freshFruit--;
                    }
                    if (y < grid.length - 1 && grid[y + 1][x] === 1) {
                        grid[y + 1][x] = 2;
                        queue.push([y + 1, x]);
                        freshFruit--;
                    }
                    if (x < grid[0].length - 1 && grid[y][x + 1] === 1) {
                        grid[y][x + 1] = 2;
                        queue.push([y, x + 1]);
                        freshFruit--;
                    }
                }
            }
            time++;
        }

        console.log(grid);
        console.log(freshFruit);
        return freshFruit === 0 ? time : -1;
    }
}
