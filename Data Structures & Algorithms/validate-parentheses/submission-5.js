class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const mapping = {
            ")": "(",
            "]": "[",
            "}": "{"
        };

        for (let char of s) {
            if (mapping[char]) {
                if (stack[stack.length - 1] !== mapping[char]) {
                    return false;
                }

                stack.pop();
            }
            else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
