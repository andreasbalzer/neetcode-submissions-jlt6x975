class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        // Calculates area of island 
        const dfs = (y, x) => {
            if (y < 0 || y >= grid.length ||
                x < 0 || x >= grid[0].length ||
                grid[y][x] !== 1) {
                return 0;
            }

            grid[y][x] = 0;
            let area = 1;
            for (let dir of dirs) {
                area += dfs(y + dir[0], x + dir[1]);
            }

            return area;
        
        };
        let maxArea = 0;
        for (let row = 0; row < grid.length; row++) {
            for (let column = 0; column < grid[0].length; column++) {
                if (grid[row][column] === 1) {
                    maxArea = Math.max(maxArea, dfs(row, column));
                }
            }
        }

        return maxArea;
    }
}
