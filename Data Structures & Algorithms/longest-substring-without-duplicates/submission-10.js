class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charToIndex = new Map();
        // when r is on a char already in charToIndex, then save length and move l to r
        let left = 0;
        let right = 0;
        let maxLength = 0;
        while (right < s.length) {
            console.log(`left ${left} ${s[left]} right ${right} ${s[right]} maxLength ${maxLength} map ${Array.from(charToIndex.entries()).join(",")}`)
            if (charToIndex.has(s[right])) {
                console.log("cleanup")
                maxLength = Math.max(maxLength, right - left);
                const target = charToIndex.get(s[right]);
                while (left <= target) {
                    charToIndex.delete(s[left]);
                    left++;
                }
            }

            charToIndex.set(s[right], right);
            right++;
        }
        maxLength = Math.max(maxLength, right - left);
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
