class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        const helper = (open, close, path = "") => {
            if (open === close && close === n) {
                result.push(path);
                return;
            }

            if (open < n) {
                helper(open + 1, close, path + "(");
            }
            if (close < open) {
                helper(open, close + 1, path + ")");
            }
        };
        helper(0, 0);
        return result;
    }
}
