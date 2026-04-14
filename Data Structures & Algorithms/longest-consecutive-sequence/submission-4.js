class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let result = 0;
        for (let index = 0; index < nums.length; index++) {
            if (set.has(nums[index] - 1)) {
                continue;
            }

            let checkNumber = nums[index] + 1;
            let currentLength = 1;
            while (set.has(checkNumber)) {
                currentLength++;
                checkNumber++;
            }

            result = Math.max(result, currentLength);
        }

        return result;
    }
}
