class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        
        const result = [];
        for (let index = 0; index < intervals.length; index++) {
            if (newInterval[1] < intervals[index][0]) {
                result.push(newInterval);
                return result.concat(intervals.slice(index));
            }
            else if (intervals[index][1] < newInterval[0]) {
                result.push(intervals[index]);
            }
            else {
                newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
                newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
            }
        }

        if (newInterval !== null) {
            result.push(newInterval);
        }

        return result;
        /**
         * 
         * ===== ====== ========= =========== ======
         *           ===============
         * 
         * 
         * 
         */
    }
}
 