class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const answers = new Array(nums.length);
        let left = 1;
        answers[0] = 1;
        for (let index = 0; index < nums.length - 1; index++) {
            left = left * nums[index];
            answers[index + 1] = left;
        }

        let right = 1;
        for (let index = nums.length - 1; index >= 1; index--) {
            right = right * nums[index];
            answers[index - 1] = answers[index - 1] * right;
        }

        return answers;
    }
}


