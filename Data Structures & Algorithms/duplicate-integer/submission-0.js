class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const memory = new Set();
        for (const num of nums) {
            if (memory.has(num)) {
                return true;
            }
            memory.add(num);
        }

        return false;
    }
}
