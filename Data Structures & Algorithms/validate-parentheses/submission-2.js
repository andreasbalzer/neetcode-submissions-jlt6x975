class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const characters = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        for (let character of s) {
            if (!characters[character]) {
                stack.push(character);
            }
            else if (stack.pop() != characters[character]) {
                return false;
            }
        }

        return stack.length === 0;
    }
}
