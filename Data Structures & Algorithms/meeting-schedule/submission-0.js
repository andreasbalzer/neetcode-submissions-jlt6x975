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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length <= 1) {
            return true;
        }

        intervals.sort((a,b) => a.start - b.start);
        
        let prev = intervals[0];
        for (let index = 1; index < intervals.length; index++) {
            if (prev.end > intervals[index].start) {
                return false;
            }
            prev = intervals[index];
        }

        return true;
    }
}
