class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const backtrack = (options, path) => {
            if (options.length === 0) {
                result.push([...path]);
                return;
            }
            for (let index = 0; index < options.length; index++) {
                const option = options[index];
                path.push(option);
                options.splice(index, 1);
                backtrack(options, path);
                path.pop();
                options.splice(index, 0, option);
            }

        };

        backtrack(nums, []);
        return result;

    }
}
