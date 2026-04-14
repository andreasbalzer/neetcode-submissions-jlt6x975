class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        for (let row = 0; row < board.length; row++) {
            const columns = new Set(new Array(9).fill(0).map((value, index) => (index + 1).toString()));
            for (let column = 0; column < board[0].length; column++) {
                if (board[row][column] !== "." && !columns.has(board[row][column])) {
                    //console.log(`c ${board[row][column]}`);
                    //console.log(columns);
                    return false;
                }

                columns.delete(board[row][column]);
            }
        }

        for (let column = 0; column < board[0].length; column++) {
            const rows = new Set(new Array(9).fill(0).map((value, index) => (index + 1).toString()));
            for (let row = 0; row < board.length; row++) {
                if (board[row][column] !== "." && !rows.has(board[row][column])) {
                    //console.log("b");
                    return false;
                }

                rows.delete(board[row][column]);
            }
        }

        for (let y = 0; y < board.length / 3; y++) {
            for (let x = 0; x < board.length / 3; x++) {
                const box = new Set(new Array(9).fill(1).map((value, index) => (index + 1).toString()));
                //console.log(box);
                for (let yCheck = 0; yCheck < board[0].length / 3; yCheck++) {
                    for (let xCheck = 0; xCheck < board.length / 3; xCheck++) {
                        if (board[y * 3 + yCheck][x * 3 + xCheck] !== "." && !box.has(board[y * 3 + yCheck][x * 3 + xCheck])) {
                            //console.log(`a ${board[y * 3 + yCheck][x * 3 + xCheck]}`);
                            //console.log(box);
                            return false;
                        }

                        box.delete(board[y * 3 + yCheck][x * 3 + xCheck]);

                    }
                }        

            }
        }

        return true;
    }
}
