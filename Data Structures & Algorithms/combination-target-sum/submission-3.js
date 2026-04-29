class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const backtrack = (index, path) => {
            const sum = path.reduce((acc, current) => acc + current, 0);
            if (sum === target) {
                result.push([...path]);
                return;
            }
            if (index === nums.length || sum > target) {
                return;
            }

            path.push(nums[index]);
            backtrack(index, path);
            path.pop();
            backtrack(index + 1, path);
        };
        backtrack(0, []);
        return result;
    };
}
