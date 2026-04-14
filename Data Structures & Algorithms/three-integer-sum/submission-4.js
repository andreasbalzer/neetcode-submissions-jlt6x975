class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        const target = 0;
        const storage = new Set();
        for (let index = 0; index < nums.length - 2; index++) {
            let left = index + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[index] + nums[left] + nums[right];
                if (sum === target) {
                    storage.add(`${nums[index]} ${nums[left]} ${nums[right]}`);
                    left++;
                    right--;
                }
                else if(sum > target) {
                    right--;
                }
                else {
                    left++;
                }
            }
        }

        return Array.from(storage.values()).map(result => result.split(" "));
    }
}
