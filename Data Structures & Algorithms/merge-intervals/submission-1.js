class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        const result = [intervals[0]];

        for (let index = 1; index < intervals.length; index++) {
            const last = result[result.length - 1];
            const current = intervals[index];
            if (last[1] < current[0]) {
                result.push(current);
            }
            else if (last[1] >= current[0]) {
                last[0] = Math.min(last[0], current[0]);
                last[1] = Math.max(last[1], current[1]);
            }
        }

        return result;
    }
}

/**
 * 
 * =====
 *   ------ done
 * 
 * ==== 
 *      ------ done
 * 
 * ====
 *     ----
 * 
 */