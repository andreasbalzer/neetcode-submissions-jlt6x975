class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = [nums[0]];
        const post = new Array(nums.length);
        post[nums.length - 1] = nums[nums.length - 1];

        for (let index = 1; index < nums.length; index++) {
            pre[index] = nums[index] * pre[index - 1];
        }

        for (let index = nums.length - 2; index >= 0; index--) {
            post[index] = nums[index] * post[index + 1];
        }

        console.log(`pre ${pre.join("-")}`);
        console.log(`post ${post.join("-")}`);

        const result = new Array(nums.length);
        result[0] = post[1];
        result[nums.length - 1] = pre[nums.length - 2];
        for (let index = 1; index < nums.length - 1; index++) {
            result[index] = pre[index - 1] * post[index + 1];
        } 

        return result;
    }
}

/**
    1 [1,  2,  4,  6] 1 
pre    1,  2,  8, 48
post  48, 48, 24,  6 
      48, 24, 12,  8
 */
