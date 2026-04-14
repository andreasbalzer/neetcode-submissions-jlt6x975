class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        /*
              ________
             /
        -----         ---
        */
        let left = 0;
        let right = nums.length - 1;
        let result = nums[0];
        while (left <= right) {
            if (nums[left] < nums[right]) {
                return Math.min(result, nums[left]);
            }

            const mid = Math.floor(left + (right - left) / 2);
            result = Math.min(result, nums[mid]);
            if (nums[mid] < nums[right]) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }

        return result;
    }
}
