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

        if (Object.keys(itemToFrequency).length === 1) {
            return [Number(Object.keys(itemToFrequency))];
        }
        
        const keys = Object.keys(itemToFrequency).map(Number);
        keys.sort((a, b) => itemToFrequency[b] - itemToFrequency[a]);
        return keys.slice(0, k);
    }
}
