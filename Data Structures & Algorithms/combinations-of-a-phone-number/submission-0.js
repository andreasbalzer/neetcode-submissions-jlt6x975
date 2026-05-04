class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) {
            return [];
        }

        const mapping = {
            "2": ["A", "B", "C"],
            "3": ["D", "E", "F"],
            "4": ["G", "H", "I"],
            "5": ["J", "K", "L"],
            "6": ["M", "N", "O"],
            "7": ["P", "Q", "R", "S"],
            "8": ["T", "U", "V"],
            "9": ["W", "X", "Y", "Z"]
        };

        const result = [];
        const backtrack = (index, path) => {
            if (index === digits.length) {
                result.push(path.join("").toLowerCase());
                return;
            }

            for (let charIndex = 0; charIndex < mapping[digits[index]].length; charIndex++) {
                path.push(mapping[digits[index]][charIndex]);
                backtrack(index + 1, path);
                path.pop();
            }
        };

        backtrack(0, []);
        return result;
    }
}
