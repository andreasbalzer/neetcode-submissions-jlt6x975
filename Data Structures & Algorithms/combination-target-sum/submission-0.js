class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const set = new Set(); // 2,2,5
        const backtrack = (index, path) => {
            const sum = path.reduce((acc, current) => acc + current, 0);
            if (sum === target) {
                set.add(path.join(","));
                return;
            }
            if (index === nums.length || sum > target) {
                return;
            }

            path.push(nums[index]);
            backtrack(index, path);
            backtrack(index + 1, path);
            path.pop();
            backtrack(index + 1, path);
        };
        backtrack(0, []);
        return Array.from(set.keys()).map((combination) => combination.split(","));
    };
}
