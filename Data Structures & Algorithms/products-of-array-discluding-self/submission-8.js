class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        const result = new Array(nums.length).fill(1);
        for (let index = 1; index < nums.length; index++) {
            result[index] = nums[index - 1] * result[index - 1];
        }

        let postFix = 1;
        for (let index = nums.length - 1; index >= 0; index--) {
            result[index] = result[index] * postFix;
            postFix = postFix * nums[index];
        }

        return result;

    }
}
