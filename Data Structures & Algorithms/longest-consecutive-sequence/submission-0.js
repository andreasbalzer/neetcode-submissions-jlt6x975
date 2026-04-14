class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const memory = new Set(nums);
        let maxLength = 0;
        for (let index = 0; index < nums.length; index++) {
            const isStart = !memory.has(nums[index] - 1);
            if (!isStart) {
                continue;
            }    

            let length = 0;
            let num2 = nums[index];
            while (memory.has(num2)) {
                length++;
                num2++;
            }
            maxLength = Math.max(maxLength, length);
        }

        return maxLength;
    }
}
