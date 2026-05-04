class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const rows = new Array(n);
        const cols = new Set();
        const posDiag = new Set();
        const negDiag = new Set();
        const generate = () => {
            let output = [];
            for (let row of rows) {
                output.push(".".repeat(row) + "Q" + ".".repeat(n - row - 1));
            }
            return output;
        };
        const result = [];
        
        const backtrack = (index) => {
            if (index === n) {
                result.push(generate());
            }

            for (let col = 0; col < n; col++) {
                if (!cols.has(col) && // col hadn't been used before
                    !posDiag.has(index + col) &&
                    !negDiag.has(index - col)
                ) { 
                    posDiag.add(index + col);
                    negDiag.add(index - col);
                    cols.add(col);
                    rows[index] = col;
                    backtrack(index + 1);
                    rows[index] = undefined;
                    cols.delete(col);
                    posDiag.delete(index + col);
                    negDiag.delete(index - col);
                }
            }
        };


        backtrack(0);
        return result;

/**
 *   0 1 2
 * 0 0 0 1
 * 1 0 1 0
 * 2 1 
 */


    }
}
