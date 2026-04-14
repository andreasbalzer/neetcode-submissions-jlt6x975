class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /*
        [1,2,2,3,3,3]
        
        itemToFrequency:
        1->1
        2->2
        3->3*/
        const itemToFrequency = {};
        for (const num of nums) {
            itemToFrequency[num] = (itemToFrequency[num] || 0) + 1;
        }
        
        const keys = Object.keys(itemToFrequency);
        keys.sort((a, b) => itemToFrequency[b] - itemToFrequency[a]);
        return keys.slice(0, k);
    }
}
