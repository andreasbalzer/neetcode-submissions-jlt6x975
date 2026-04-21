class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const findStartIndex = () => {
            let left = 0;
            let right = nums.length - 1;
            while (left < right) {
                const mid = Math.floor((right - left) / 2 + left);
                if (nums[mid] > nums[mid + 1]) {
                    return mid + 1;
                }
                if (nums[mid] < nums[right]) {
                    right = mid;
                }
                else {
                    left = mid + 1;
                }
            }

            return left;
        }

        return nums[findStartIndex()];
    }
}
