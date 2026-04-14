class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let axis = new Array(10).fill(0);
        // check each row
        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board[0].length; column++) {
                if (board[row][column] === ".") {
                    continue;
                }
                const digit = parseInt(board[row][column], 10);
                if (axis[digit] !== 0) {
                    console.log(`row column ${column} row ${row} digit ${digit}`);
                    return false;
                }
                
                axis[digit]++;
            }
            axis.fill(0);
        }

        // check each column
        for (let column = 0; column < board[0].length; column++) {
            for (let row = 0; row < board.length; row++) {
                if (board[row][column] === ".") {
                    continue;
                }
                const digit = parseInt(board[row][column], 10);
                if (axis[digit] !== 0) {
                    console.log(`col column ${column} row ${row}  digit ${digit}`);
                    return false;
                }
                
                axis[digit]++;
            }
            axis.fill(0);
        }

        for (let boxX = 0; boxX < 3; boxX++) {
            for (let boxY = 0; boxY < 3; boxY++) {
                for (let x = 0; x < 3; x++) {
                    for (let y = 0; y < 3; y++) {
                        if (board[3*boxY + y][3*boxX + x] === ".") {
                            continue;
                        }


                        const digit = parseInt(board[3* boxY + y][3* boxX + x], 10);
                        if (axis[digit] !== 0) {
                            console.log(`BoxX ${boxX} BoxY ${boxY} x ${x} y ${y}  digit ${digit} axis ${axis[digit]}`);
                            return false;
                        }

                        axis[digit]++;
                    }
                }

                axis.fill(0);
            }
        }
        return true;
    }  
}
