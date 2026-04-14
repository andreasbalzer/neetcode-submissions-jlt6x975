class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const memory = new Map();
        for (let index = 0; index < nums.length; index++) {
            const num = nums[index];
            const complement = target - num;
            
            if (memory.has(complement)) {
                const complementIndex = memory.get(complement);
                return [index, complementIndex];
            }

            memory.set(num, index);
        }

        return [-1, -1];
    }
}
