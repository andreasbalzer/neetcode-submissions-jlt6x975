class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ")": "(",
            "]": "[",
            "}": "{"
        };

        for (let character of s) {
            if (map[character] !== undefined && map[character] === stack[stack.length - 1]) {
                stack.pop();
            }
            else {
                stack.push(character);
            }
        }

        return stack.length === 0;
    }
}
