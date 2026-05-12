class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let result1 = 0;
        let result2 = 0;
        let current = 0;
        for (let step = cost.length - 1; step > 0; step--) {
            console.log(`step ${step} cost/step ${cost[step]} current ${current} result1 ${result1} result2 ${result2}`);
            current = cost[step] + Math.min(result1, result2);
            result2 = result1;
            result1 = current;
        }
        current = cost[0] + Math.min(result1, result2);


        console.log(`current ${current} result1 ${result1}`);
        return Math.min(current, result1);
/**
 *               c    r1   r2
 * [    ,     ,     ] 0    0
 * [    ,     ,  3  ] 0    0
 
 *          c    r1    r2
 * [    ,   2   , 3   ] 0
 
     c     r1    r2
 * [ 3   ,  2   , 3    ] 0    0
 * 
 * 
 * [ 1  ,  2  ,  3  ]   
 *  cost[i] + Min(result[i+1], result[i+2])
 */



    }
}
