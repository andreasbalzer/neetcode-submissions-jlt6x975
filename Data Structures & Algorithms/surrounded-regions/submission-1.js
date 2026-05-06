class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const dfs = (y, x) => {
            if (board[y][x] === "O") {
                console.log(`Set ${y} ${x} to Y`);
                board[y][x] = "Y";
                for (let dir of dirs) {
                    if (y + dir[0] < 0 || y + dir[0] >= board.length ||
                        x + dir[1] < 0 || x + dir[1] >= board[0].length ||
                        board[y + dir[0]][x + dir[1]] !== "O"     
                    ) {
                        continue;
                    }

                    dfs(y + dir[0], x + dir[1]);
                }
            }
        };

        for (let y = 0; y < board.length; y++) {
            dfs(y, 0);
            dfs(y, board[0].length - 1);
        }

        for (let x = 0; x < board[0].length; x++) {
            dfs(0, x);
            dfs(board.length - 1, x);
        }

        console.log(board);

        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[0].length; x++) {
                if (board[y][x] === "O") {
                    board[y][x] = "X";
                }
            }
        }

        console.log(board);

        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[0].length; x++) {
                if (board[y][x] === "Y") {
                    board[y][x] = "O";
                }
            }
        }

        console.log(board);
    }
}
