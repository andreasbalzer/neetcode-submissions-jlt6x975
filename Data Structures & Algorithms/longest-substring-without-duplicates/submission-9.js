class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // find longest sequence of characters without duplicate character
        // --> max sequence
        // sliding window
        // map of characters in the window, if we encounter duplicate, erase everything from left to the other duplicate character

        // z  xyzxyz
        //      l  r

        let left = 0;
        let right = 0;
        let storage = new Map(); // char -> index
        let maxLength = 0;

        while (right < s.length) {
            while (storage.has(s[right])) {
                storage.delete(s[left]);
                left++;
            }
            storage.set(s[right], right);
            maxLength = Math.max(maxLength, right + 1 - left);

            right++;
        }

        return maxLength;
    }
}
