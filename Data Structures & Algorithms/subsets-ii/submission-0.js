class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        const backtrack = (index, path) => {
            if (index === nums.length) {
                result.push([...path]);
                return;
            }

            path.push(nums[index]);
            backtrack(index + 1, path);
            path.pop();
            let skipIndex = index + 1;
            while (skipIndex < nums.length && nums[skipIndex] === nums[index]) {
                skipIndex++;
            }
            backtrack(skipIndex, path);
        };

        backtrack(0, []);

        return result;
    }
}
