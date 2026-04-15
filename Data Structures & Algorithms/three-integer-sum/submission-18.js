class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        nums = nums.sort((a, b) => a - b);
        for (let index = 0; index < nums.length - 2; index++) {
            if (index > 0 && nums[index] === nums[index - 1]) {
                continue;
            }
            let left = index + 1;
            let right = nums.length - 1;
            while (left < right) {
                if (nums[index] + nums[left] + nums[right] === 0) {
                    result.push([nums[index], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (nums[left] === nums[left - 1] && left < right) {
                        left++;
                    }
                }
                else if (nums[index] + nums[left] + nums[right] < 0) {
                    left++;
                }
                else {
                    right--;
                }
            }
        }

        return result;
    }
}
