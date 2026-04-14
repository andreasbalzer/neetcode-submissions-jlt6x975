class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    /**
     * sliding window
     * l/r on 0
     * move r every loop iteration
     * add character at r into map, count
     * while (windowLength - k > maxChar in map) {
     *  move l: remove character from map
     * }
     * set maxLength
     */

        let left = 0;
        let right = 0;
        let maxLength = 0;
        const chars = new Map();
        let maxLetter = 0;

        while (right < s.length) {
            chars.set(s[right], (chars.get(s[right]) || 0) + 1);
            maxLetter = Math.max(maxLetter, chars.get(s[right]));
            console.log(`chars ${Array.from(chars.entries()).join(",")} maxLetter ${maxLetter} maxLength ${maxLength}`)
            while (right + 1 - left - k > maxLetter) {
                console.log("cleanup")
                chars.set(s[left], chars.get(s[left]) - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right + 1 - left);

            right++;
        }

        return maxLength;
    }
}
