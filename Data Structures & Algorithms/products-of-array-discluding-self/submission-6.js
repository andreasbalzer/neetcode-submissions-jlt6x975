class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        const preproduct = new Array(nums.length + 2).fill(1);
        const postproduct = new Array(nums.length + 2).fill(1);
        for (let index = 0; index < nums.length; index++) {
            preproduct[index + 1] = nums[index] * preproduct[index];
        }
        
        for (let index = nums.length - 1; index > 0; index--) {
            postproduct[index - 1] = nums[index] * postproduct[index];
        }

        const result = new Array(nums.length);
        for (let index = 0; index < nums.length; index++) {
            result[index] = preproduct[index] * postproduct[index];
        }

        return result;

    }
}
