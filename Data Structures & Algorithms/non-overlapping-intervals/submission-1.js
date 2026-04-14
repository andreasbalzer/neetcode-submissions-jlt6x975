class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        
        let prevEnd = intervals[0][1];
        let count = 0;

        for (let index = 1; index < intervals.length; index++) {
            const [start, end] = intervals[index];
            if (start >= prevEnd) {
                prevEnd = end;
            }
            else {
                count++;
                prevEnd = Math.min(end, prevEnd);
            }
        }

        return count;
    }
}
