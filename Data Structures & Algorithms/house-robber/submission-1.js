class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let h1 = 0;
        let h2 = 0;
        let current = 0;
        for (let house = nums.length - 1; house >= 0; house--) {
            current = Math.max(nums[house] + h2, h1);
            h2 = h1;
            h1 = current; 
        }
        return current;
        /**
         * [ 1, 1, 3, 3] 0 0
         * winning = Math.max(nums[index] + nums[index + 2], nums[index + 1] + nums[index + 3]) 
         * 
         * 
         * 
         * [2,9,  8,  3,6] 0, 0
         *       14   6 6
         *    15
         * 16 
         * 
         */
    }
}
