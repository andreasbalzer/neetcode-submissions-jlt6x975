class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let col2 = new Array(m).fill(1);
        
        for (let colIndex = n - 2; colIndex >= 0; colIndex--) {
            for (let rowIndex = m - 2; rowIndex >= 0; rowIndex--) {
                col2[rowIndex] += col2[rowIndex + 1];
            }           
        }

        return col2[0];
    }
}

/*

 [ 6,  3, 1]
 [ 3 , 2, 1]
 [ 1,  1, 1]

*/

