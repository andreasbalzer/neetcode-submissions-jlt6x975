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
        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            console.log(`left ${left} right ${right} mid ${mid} nums[mid] ${nums[mid]}`);
            if (nums[mid] > nums[mid + 1]) {
                return nums[mid + 1];
            }
            if (nums[mid] < nums[right]) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }

        return nums[left];
    }
}
