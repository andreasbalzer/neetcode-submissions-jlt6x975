class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(board.length).fill(1).map(() => new Set([1,2,3,4,5,6,7,8,9]));
        const columns = new Array(board[0].length).fill(1).map(() => new Set([1,2,3,4,5,6,7,8,9]));
        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board[0].length; column++) {
                if (board[row][column] === ".") {
                    continue;
                }
                if (!rows[row].has(parseInt(board[row][column], 10))) {
                    return false;
                }

                rows[row].delete(parseInt(board[row][column], 10));
            }
        }

        
        for (let column = 0; column < board[0].length; column++) {
            for (let row = 0; row < board.length; row++) {
                if (board[row][column] === ".") {
                    continue;
                }
                
                if (!columns[column].has(parseInt(board[row][column], 10))) {
                    return false;
                }

                columns[column].delete(parseInt(board[row][column], 10));
            }
        }

        for (let yBox = 0; yBox < board.length / 3; yBox++) {
            for (let xBox = 0; xBox < board[0].length / 3; xBox++) {
                const box = new Set([1,2,3,4,5,6,7,8,9]);
                for (let y = 0; y < board.length / 3; y++) {
                    for (let x = 0; x < board[0].length / 3; x++) {
                        if (board[yBox * 3 + y][xBox * 3 + x] === ".") {
                           continue;
                        }
                        
                        if (!box.has(parseInt(board[yBox * 3 + y][xBox * 3 + x], 10))) {
                            return false;
                        }                        

                        box.delete(parseInt(board[yBox * 3 + y][xBox * 3 + x], 10));
                    }
                }
                
            }
        }

        return true;

    }
}
