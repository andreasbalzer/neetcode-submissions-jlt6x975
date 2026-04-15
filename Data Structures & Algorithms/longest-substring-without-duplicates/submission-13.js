class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        const seenChars = new Set(); // char
        let left = 0;
        for (let right = 0; right < s.length; right++) {
            while (seenChars.has(s[right])) {
                seenChars.delete(s[left]);
                left++;
            }
            seenChars.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
