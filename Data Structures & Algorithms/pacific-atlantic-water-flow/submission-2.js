class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pacific = new Set();
        const atlantic = new Set();
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const dfs = (y, x, set) => {
            set.add(`${y}-${x}`);
            for (let dir of dirs) {
                if (y + dir[0] < 0 || y  + dir[0] >= heights.length ||
                    x + dir[1] < 0 || x + dir[1] >= heights[0].length ||
                    set.has(`${y + dir[0]}-${x + dir[1]}`) ||
                    heights[y + dir[0]][x + dir[1]] < heights[y][x]) {
                    continue;
                }

                dfs(y + dir[0], x + dir[1], set);
            }
        };
        for (let x = 0; x < heights[0].length; x++) {
            dfs(0, x, pacific);
        }
        for (let y = 0; y < heights.length; y++) {
            dfs(y, 0, pacific);
        }

        for (let x = 0; x < heights[0].length; x++) {
            dfs(heights.length - 1, x, atlantic);
        }
        for (let y = 0; y < heights.length; y++) {
            dfs(y, heights[0].length - 1, atlantic);
        }

        const result = [];
        console.log(`Pacific:`);
        console.log(Array.from(pacific.values()));
        console.log(Array.from(atlantic.values()));
        for (let key of pacific.values()) {
            if (atlantic.has(key)) {
                result.push(key.split("-").map((item) => parseInt(item, 10)));
            }
        }
 
        return result;
    }
}
