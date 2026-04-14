class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let max = 0;
        for (let index = 0; index < nums.length; index++) {
            if (max < index) {
                console.log(`max ${max} index ${index}`);
                return false;
            }
            if (max >= nums.length - 1) {
                return true;
            }
            max = Math.max(max, nums[index] + index);
        }

        return false;
    }
}
