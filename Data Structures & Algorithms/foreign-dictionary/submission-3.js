class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const map = new Map();
        for (let word of words) {
            for (let char of word) {
                map.set(char, []);
            }
        }
        for (let index = 0; index < words.length - 1; index++) {
            const word1 = words[index];
            const word2 = words[index + 1];
            const minLength = Math.min(word1.length, word2.length);
            if (word1.length > word2.length && word1.substring(0, minLength) === word2.substring(0, minLength)) {
                return "";
            }
            for (let charIndex = 0; charIndex < minLength; charIndex++) {
                if (word1[charIndex] !== word2[charIndex]) {
                    map.get(word1[charIndex]).push(word2[charIndex]);
                    break;
                }
            }
        }

        let result = "";

        const visit = new Set();
        const visiting = new Set();
        const dfs = (char) => {
            if (visiting.has(char)) {
                return true;
            }
            if (visit.has(char)) {
                return false;
            }

            visiting.add(char);
            visit.add(char);

            for (let neighbour of (map.get(char) ?? [])) {
                if (dfs(neighbour)) {
                    return true;
                }
            }

            visiting.delete(char);

            result += char;

            return false;
        };


        console.log(map);
        for (let char of map.keys()) {
            if (dfs(char)) {
                return "";
            }
        }

        return result.split("").reverse().join("");
    }
}
