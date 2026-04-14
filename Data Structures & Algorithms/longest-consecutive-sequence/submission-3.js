class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numbers = new Set(nums);
        let currentLength = 0;
        let maxLength = 0;
        for (let num of nums) {
            if (numbers.has(num - 1)) {
                continue;
            }
            let currentNumber = num;
            while (numbers.has(currentNumber)) {
                currentLength++;
                maxLength = Math.max(maxLength, currentLength);
                currentNumber++;
            }
            currentLength = 0;
        }

        return maxLength;
    }
}
