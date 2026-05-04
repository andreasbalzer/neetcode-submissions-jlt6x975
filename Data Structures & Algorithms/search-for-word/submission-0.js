class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let isFound = false;
        let visit = new Set();
        const backtrack = (x, y, index) => {
            if (index === word.length || isFound) {
                isFound = true;
                return;
            }
            if (x < 0 || x >= board[0].length ||
                y < 0 || y >= board.length ||
                visit.has(`${x}-${y}`)) {
                return;
            }

            if (board[y][x] === word[index]) {
                visit.add(`${x}-${y}`);
                backtrack(x - 1, y, index + 1);
                backtrack(x + 1, y, index + 1);
                backtrack(x, y - 1, index + 1);
                backtrack(x, y + 1, index + 1);
                visit.delete(`${x}-${y}`);
            }
        };
        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[0].length; x++) {
                backtrack(x, y, 0);
            }
        }

        return isFound;
    }
}
