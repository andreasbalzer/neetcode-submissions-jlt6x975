class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
         let left = 0;
        let maxLength = 0;
        let maxCount = 0;
        const storage = new Map(); // char -> frequency
        for (let index = 0; index < s.length; index++) {
            
            storage.set(s[index], (storage.get(s[index]) || 0) + 1);
            maxCount = Math.max(maxCount, storage.get(s[index]));

            while(index - left + 1 > k + maxCount) {
                storage.set(s[left], storage.get(s[left]) - 1);    
                left++;
            }
            
            maxLength = Math.max(maxLength, index - left + 1);
        }

        return maxLength;
    }
}
