class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        while (true) {
            console.log(`1 slow ${slow} fast ${fast}`);
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) {
                break;
            }
        }
        /*

        nums=[1,2,3,2,2]
              s f
                s   f
                  s f
                    s/f

        */

        fast = 0;
        while (true) {
            console.log(`2 slow ${slow} fast ${fast}`);
            slow = nums[slow];
            fast = nums[fast];

            if (slow === fast) {
                return slow;
            }
        }

        /*

        nums=[1,2,3,2,2]
              f     s 
                f s
                  f s
                  s f 
*/

        return fast;
    }
}
