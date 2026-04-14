class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let charCount = new Set();
        let maxLength = 0;
        for (let right = 0; right < s.length; right++) {
            while (charCount.has(s[right])) {
                charCount.delete(s[left]);
                left++;
            }
            charCount.add(s[right]);
            maxLength = Math.max(maxLength, right + 1 - left);

        }

        return maxLength;
    }
}
