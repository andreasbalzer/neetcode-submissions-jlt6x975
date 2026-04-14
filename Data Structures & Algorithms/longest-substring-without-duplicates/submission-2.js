class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const memory = new Set();
        let maxLength = 0;

        let startIndex = 0;
        for (let index = 0; index < s.length; index++) {
            if (memory.has(s[index])) {
                while (memory.has(s[index])) {
                    memory.delete(s[startIndex]);
                    startIndex++;
                }
            }
            memory.add(s[index]);
            maxLength = Math.max(maxLength, index + 1 - startIndex);
        }
        return maxLength;
    }
}
