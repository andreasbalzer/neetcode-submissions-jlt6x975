class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];
        const backtrack = (i, path) => {
            console.log(`index ${i} path ${path.join(",")}`);
            if (i >= s.length) {
                result.push([...path]);
                return;
            }
            for (let j = i; j < s.length; j++) {
                const part = s.substring(i, j + 1);
                const isPali = isPalindrome(part);
                if (isPali) {
                    path.push(part);
                    backtrack(j + 1, path);
                    path.pop();
                }
            }
        };
        const isPalindrome = (word) => {
            return word == word.split("").reverse().join("");
        }
        backtrack(0, []);
        return result;
    }
}
