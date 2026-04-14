class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const preProduct = (new Array(nums.length));
        const postProduct = (new Array(nums.length));
        preProduct[0] = nums[0];
        postProduct[nums.length - 1] = nums[nums.length - 1];

        for (let index = 1; index < nums.length; index++) {
            preProduct[index] = preProduct[index - 1] * nums[index];
        }


        for (let index = nums.length - 2; index >= 0; index--) {
            postProduct[index] = postProduct[index + 1] * nums[index];
        }

        const output = (new Array(nums.length)).fill(1);
        output[0] = postProduct[1];
        output[nums.length - 1] = preProduct[nums.length - 2];
        for (let index = 1; index < nums.length - 1; index++) {
            output[index] = preProduct[index - 1] * postProduct[index + 1];
        }

        return output;
    }
}
