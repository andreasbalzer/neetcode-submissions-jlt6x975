class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        const backtrack = (open, total, path) => {
            if (open === 0 && total === 0) {
                result.push(path);
                return;
            }

            if (total > 0) {
                backtrack(open + 1, total - 1, path + "(");
            }
            if (open > 0) {
                backtrack(open - 1, total, path + ")");
            }

        };
        backtrack(0, n, "");
        return result;
    }
}
