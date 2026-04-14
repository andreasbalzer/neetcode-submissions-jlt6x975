class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const availableNumbers = new Set(nums);
        let maxLength = 0;
        for (let num of nums) {
            if (availableNumbers.has(num - 1)) {
                continue;
            }

            let currentNumber = num;
            let currentLength = 0;
            while (availableNumbers.has(currentNumber)) {
                availableNumbers.delete(currentNumber);
                currentNumber++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }

        return maxLength;
    }
}
