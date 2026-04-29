class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a, b) => a - b);
        const result = [];
        const backtrack = (index, path, total) => {
            if (total === target) {
                result.push([...path]);
                return;
            }
            if (index === nums.length || total > target) {
                return;
            }

            path.push(nums[index]);
            backtrack(index, path, total + nums[index]);
            path.pop();
            backtrack(index + 1, path, total);
        };
        backtrack(0, [], 0);
        return result;
    };
}
