class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = new Map();
        nums.sort((a, b) => a - b);

        for (let index = 0; index < nums.length - 2; index++) {
            let left = index + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[left] + nums[right] + nums[index];
                if (sum === 0) {
                    result.set(`${nums[index]}/${nums[left]}/${nums[right]}`, [nums[index], nums[left], nums[right]]);
                    left++;
                }
                else if (sum > 0) {
                    right--;
                }
                else {
                    left++;
                }
            }
        }

        return Array.from(result.values());
    }
}
