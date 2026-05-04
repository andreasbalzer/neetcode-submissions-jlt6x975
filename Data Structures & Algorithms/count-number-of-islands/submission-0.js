class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const dfs = (y, x) => {
            if (y < 0 || y >= grid.length ||
                x < 0 || x >= grid[0].length ||
                grid[y][x] !== "1") {
                return;
            }

            grid[y][x] = "2";

            dirs.forEach((dir) => {
                dfs(y + dir[0], x + dir[1])
            });

        };

        let islands = 0;
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[0].length; x++) {
                if (grid[y][x] === "1") {
                    dfs(y, x);
                    islands++;
                }
            }
        }
        return islands;
    }
}
