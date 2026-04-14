class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const itemToFrequency = {};
        for (const num of nums) {
            itemToFrequency[num] = (itemToFrequency[num] || 0) + 1;
        }

        if (nums.length === 1) {
            return [nums[0]];
        }
        
        const keys = Object.keys(itemToFrequency);
        keys.sort((a, b) => itemToFrequency[b] - itemToFrequency[a]);
        return keys.slice(0, k);
    }
}
