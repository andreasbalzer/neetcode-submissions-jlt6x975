class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const backtrack = (index, path) => {
            if (index === nums.length) {
                result.push([...path]);
                return;
            }
            path.push(nums[index]);
            backtrack(index + 1, path);
            path.pop();
            backtrack(index + 1, path);

        };

        backtrack(0, []);
        return result;
    }
}
