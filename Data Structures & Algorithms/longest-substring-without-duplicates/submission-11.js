class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = new Set();
        let left = 0;
        let right = 0;
        let maxLength = 0;
        while (right < s.length) {
            while (chars.has(s[right])) {
                chars.delete(s[left]);
                left++;
            }

            chars.add(s[right]);
            maxLength = Math.max(maxLength, right + 1 - left);

            right++;
        }
        return maxLength;
    }

}
/**
 z  xyzxyz
 lr             z->0
 l  r           x->1
 l   r          y->2
 l    r

 */
