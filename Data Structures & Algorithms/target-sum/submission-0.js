class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const backtrack = (index, sum) => {
            if (index >= nums.length && 
                sum === target) {
                return 1;
            }
            else if (index >= nums.length) {
                return 0;
            }

            return backtrack(index + 1, sum + nums[index]) + backtrack(index + 1, sum - nums[index]);
        }

        return backtrack(0, 0);
    }
}

