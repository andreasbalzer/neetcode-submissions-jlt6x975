/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = intervals.map((interval) => interval.start).sort((a,b) => a - b);
        const end = intervals.map((interval) => interval.end).sort((a,b) => a - b);

        let count = 0;
        let result = 0;
        let startPointer = 0;
        let endPointer = 0;
        while (startPointer < start.length) {

            if (start[startPointer] < end[endPointer]) {
                startPointer++;
                count += 1;
            }
            else {
                endPointer++;
                count -= 1;
            }

            result = Math.max(result, count);
        }

        return result;
    }
}
