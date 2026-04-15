class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
            // return 1-indexed indices
            // no reuse
            let left = 0;
            let right = numbers.length - 1;
            while (left < right) {
                if (numbers[left] + numbers[right] === target) {
                    return [left + 1, right + 1];
                }
                if (numbers[left] + numbers[right] < target) {
                    left++;
                }
                else {
                    right--;
                }
            }

        return [-1, -1];
    }
}
