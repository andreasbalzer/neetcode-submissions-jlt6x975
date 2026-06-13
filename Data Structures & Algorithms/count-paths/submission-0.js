class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let col2 = new Array(m).fill(1);
        let col1 = new Array(m); 
        
        for (let colIndex = n - 2; colIndex >= 0; colIndex--) {
            col1[col1.length - 1] = 1;
            for (let rowIndex = m - 2; rowIndex >= 0; rowIndex--) {
                col1[rowIndex] = col1[rowIndex + 1] + col2[rowIndex];
            }            

            col2 = col1;
            col1 = new Array(m);
        }

        return col2[0];
    }
}
