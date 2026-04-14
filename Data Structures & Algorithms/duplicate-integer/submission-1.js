class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const storage = new Map();
        for (const num of nums) {
            if (storage.has(num)) {
                return true;
            }

            storage.set(num, true);
        }

        return false;
    }
}
