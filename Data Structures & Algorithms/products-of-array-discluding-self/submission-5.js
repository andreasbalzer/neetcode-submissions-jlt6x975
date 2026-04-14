class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        nums.unshift(1);
        nums.push(1);
        const preproduct = new Array(nums.length).fill(1);
        const postproduct = new Array(nums.length).fill(1);
        for (let index = 1; index < nums.length - 1; index++) {
            preproduct[index] = nums[index] * preproduct[index - 1];
        }

        console.log(preproduct);

        for (let index = nums.length - 2; index > 0; index--) {
            postproduct[index] = nums[index] * postproduct[index + 1];
        }

        console.log(postproduct);

        const result = new Array(nums.length - 2);
        for (let index = 0; index < result.length; index++) {
            result[index] = preproduct[index] * postproduct[index + 2];
        }

        return result;

    }
}
