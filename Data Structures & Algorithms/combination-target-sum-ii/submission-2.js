class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a - b);
        const result = [];
        const backtrack = (index, path, sum) => {
            if (sum === target) {
                result.push([...path]);
                return;
            }

            if (sum > target || index === candidates.length) {
                return;
            }


            path.push(candidates[index]);
            backtrack(index + 1, path, sum + candidates[index]);
            path.pop();
            const currentNumber = candidates[index];
            while (index < candidates.length && candidates[index] === currentNumber) {
                index++;
            }
            backtrack(index, path, sum);
        };
        backtrack(0, [], 0);
        return result;
    }
}
