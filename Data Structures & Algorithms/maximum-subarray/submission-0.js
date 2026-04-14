class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = Number.NEGATIVE_INFINITY;
        let count = 0;
        for (let num of nums) {
            if (count < 0) {
                count = 0;
            }
            count += num;
            max = Math.max(max, count);
        }

        return max;
    }
}
