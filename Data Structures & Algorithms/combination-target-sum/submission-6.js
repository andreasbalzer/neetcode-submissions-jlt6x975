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
            for (let j = index; j < nums.length; j++) {
                if (total + nums[j] > target) {
                    return;
                }
                path.push(nums[j]);
                backtrack(j, path, total + nums[j]);
                path.pop();
            }
            
            
        };
        backtrack(0, [], 0);
        return result;
    };
}
