class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let minProduct = 1;
        let maxProduct = 1;
        let max = nums[0];

        for (let num of nums) {
            const tmp = maxProduct * num;
            maxProduct = Math.max.apply(null, [tmp, num * minProduct, num]);
            minProduct = Math.min.apply(null, [tmp, num * minProduct, num]);

            max = Math.max.apply(null, [max, maxProduct]);
            console.log(max);

        }

        return max;
    }
}
