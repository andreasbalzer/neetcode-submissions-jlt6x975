class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }
        /*
               h1 h2
        [3,4,3]       [3,4,3]
         6 4 3
         */
        const robParts = (nums, start, end) => {
            let h1 = 0;
            let h2 = 0;
            let current = 0;

            for (let index = end; index >= start; index--) { 
                current = Math.max(nums[index] + h2, h1);
                h2 = h1;
                h1 = current;
            }

            return current;
        };

        const firstPass = robParts(nums, 0, nums.length - 2);
        const secondPass = robParts(nums, 1, nums.length - 1);
        return Math.max(
            firstPass,
            secondPass
        );
    }
}
