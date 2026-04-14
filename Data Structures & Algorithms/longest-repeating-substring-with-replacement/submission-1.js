class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        /**
         * end - start < max + k 
         */
        let left = 0;
        let max = 0;
        let maxCount = 0;
        const storage = new Map(); // char -> frequency
        for (let index = 0; index < s.length; index++) {
            
            storage.set(s[index], (storage.get(s[index]) || 0) + 1);
            maxCount = Math.max(maxCount, storage.get(s[index]));
            
            console.log(Array.from(storage.values()));
            console.log(`k ${k} left ${left} index ${index} maxCount ${maxCount} --> max ${max}`);
            

            if (index - left >= k + maxCount) {
                storage.set(s[left], storage.get(s[left]) - 1);    
                left++;
            }
            else {
                max = Math.max(max, index - left + 1);
            }
        }

        return max;
    }
}
