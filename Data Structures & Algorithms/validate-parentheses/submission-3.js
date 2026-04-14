class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            "]": "[",
            ")": "(",
            "}": "{"
        };

        for (let index = 0; index < s.length; index++) {
            if (!map[s[index]]) {
                stack.push(s[index]);
            }
            else if (stack.pop() !== map[s[index]]) {
                return false;
            }
        }

        return stack.length === 0;
    }
}
