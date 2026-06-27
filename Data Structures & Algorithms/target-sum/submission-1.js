class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const dp = new Map();
        const backtrack = (index, sum) => {
            if (index >= nums.length && 
                sum === target) {
                return 1;
            }
            else if (index >= nums.length) {
                return 0;
            }


            const key = `${index}_${sum}`;
            if (dp.has(key)) {
                return dp.get(key);
            }

            dp.set(key, backtrack(index + 1, sum + nums[index]) + backtrack(index + 1, sum - nums[index]));

            return dp.get(key);
        }

        return backtrack(0, 0);
    }
}

