class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let nPlus1 = 1;
        let nPlus2 = 0;
        let nCurrent = 0;
        for (let i = 0; i < n; i++) {
            nCurrent = nPlus1 + nPlus2;
            nPlus2 = nPlus1;
            nPlus1 = nCurrent;
        }

        return nCurrent;
/**
 * [1 ,1 ]
 * 
 * 
 * [2  , 1 ] 1  0
 * [   ,   ,   ] 1 0
 *  3    2    1
 * 
 */


    }
}
