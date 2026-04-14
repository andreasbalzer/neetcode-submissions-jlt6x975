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
        intervals.sort((a,b) => a.start - b.start);
        
        for (let index = 1; index < intervals.length; index++) {
            if (intervals[index - 1].end > intervals[index].start) {
                return false;
            }
        }

        return true;
    }
}
