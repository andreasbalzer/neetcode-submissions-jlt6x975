class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const memory = new Set(nums);
        let maxLength = 0;
        for (const num of nums) {
            if (memory.has(num - 1)) {
                continue;
            }

            let length = 0;
            while (memory.has(num + length)) {
                length++;
            }
            maxLength = Math.max(maxLength, length);
        }

        return maxLength;
    }
}
