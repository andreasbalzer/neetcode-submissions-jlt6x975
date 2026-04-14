class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set();
        for(let row = 0; row < board.length; row++) {
            for(let col = 0; col < board[0].length; col++) {
                if (board[row][col] === ".") {
                    continue;
                }
                if (set.has(board[row][col])) {
                    return false;
                }
                set.add(board[row][col]);
            }
            set.clear();   
        }

        for(let col = 0; col < board[0].length; col++) {
            for(let row = 0; row < board.length; row++) {
                if (board[row][col] === ".") {
                    continue;
                }
                if (set.has(board[row][col])) {
                    return false;
                }
                set.add(board[row][col]);
            }
            set.clear();   
        }

        
        for(let row = 0; row < board.length / 3; row++) {
            for(let col = 0; col < board[0].length / 3; col++) {
                for(let y = 0; y < board.length / 3; y++) {
                    for(let x = 0; x < board[0].length / 3; x++) {
                        if (board[3*row + y][3*col + x] === ".") {
                            continue;
                        }
                        if (set.has(board[3*row + y][3*col + x])) {
                            return false;
                        }
                        set.add(board[3*row + y][3*col + x]);
                    }
                }       
                set.clear(); 
            }
        }

        return true;
    }
}
