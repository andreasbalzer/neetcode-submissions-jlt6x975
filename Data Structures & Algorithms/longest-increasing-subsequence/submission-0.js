class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const lengths = new Array(nums.length).fill(1);
        /*
            [9,1,4,2,3,3,7] nums
            [1,5,2,4,3,2,1] lengths


        */
        for (let index = nums.length - 2; index >= 0; index--) {
            for (let lookIndex = index + 1; lookIndex < nums.length; lookIndex++) {
                if (nums[lookIndex] > nums[index]) {
                    lengths[index] = Math.max(lengths[index], lengths[lookIndex] + 1);
                }
            }
        }

        return Math.max.apply(null, lengths);
    }
}
 