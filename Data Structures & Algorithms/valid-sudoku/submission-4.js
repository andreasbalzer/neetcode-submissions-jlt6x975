class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set();
        for(let row = 0; row < board.length; row++) {
            for(let col = 0; col < board[0].length; col++) {
                let value = board[row][col];

                if (value === ".") {
                    continue;
                }

                const boxIndex = `${Math.floor(row/3)}-${Math.floor(col/3)}`;
                const rowKey = `row-${row}-${value}`;
                const colKey = `col-${col}-${value}`;
                const boxKey = `box-${boxIndex}-${value}`;

                if (set.has(rowKey) || set.has(colKey) || set.has(boxKey)) {
                    return false;
                }

                set.add(rowKey);
                set.add(colKey);
                set.add(boxKey);
            }
        }

        return true;
    }
}
