class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        // (x)
        // ()x
        
        const result = [];
        const helper = (count, open, path) => {
            if (count === n * 2) {
                result.push(path);
                return;
            }

            if (count + open < n * 2) {
                helper(count + 1, open + 1, path + "(");
            }
            if (open > 0) {
                helper(count + 1, open - 1, path + ")");
            }
        };

        helper(0, 0, "");
        return result;
    }
}
