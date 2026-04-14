class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const result = nums.reduce(
            (accumulator, currentValue, currentIndex) => 
                accumulator ^ currentValue ^ currentIndex,
            0) ^ nums.length;
        return result;
    }
}
