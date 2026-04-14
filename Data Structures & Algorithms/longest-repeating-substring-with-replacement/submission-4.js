class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // longest character sequence of one character, with k replacements
        // max sequence length
        // sliding window left, right
        // right + 1 - left > maxCount + k --> increment left

        let left = 0;
        let right = 0;
        let maxCount = 0; // most frequent character in window
        let maxLength = 0;
        const storage = new Map(); // char --> frequency

        while (right < s.length) {
            storage.set(s[right], (storage.get(s[right]) || 0) + 1);
            maxCount = Math.max(maxCount, storage.get(s[right]));

            while (right + 1 - left > maxCount + k) {
                storage.set(s[left], storage.get(s[left]) - 1);    
                left++;
            }
            maxLength = Math.max(maxLength, right + 1 - left);
            right++;
        }

        return maxLength;
    }
    /**
     * X   YYX k =2
     * lr             storage: X -> 1; maxLength: 1
     * l   r          storage: X-> 1, Y -> 1; maxLength: 2
     * l    r         storage: X-> 1, Y -> 2; maxLength: 3
     * l     r
     * 
     */
}
