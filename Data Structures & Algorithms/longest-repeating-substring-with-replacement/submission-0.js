class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let right = 0;
        // keep track of characters seen in memory
        // keep track of max count
        // if window size >= maxcount + k then pull in left

        let maxCount = 0;
        let memory = new Map(); // character -> count

        while (right < s.length) {
            memory.set(s[right], (memory.get(s[right]) || 0) + 1);
            maxCount = Math.max(maxCount, memory.get(s[right]));
            if (right + 1 - left - maxCount > k) {
                memory.set(s[left], memory.get(s[left]) - 1);
                left++;
            }
            right++;
        }

        return right - left;
    }
}

/* X Y Y X
   r        memory x=1, maxCount = 1
     r      memory x=1, y=2, maxCount = 2
   l   r    memory y=2, maxCount=2
     l   r

*/