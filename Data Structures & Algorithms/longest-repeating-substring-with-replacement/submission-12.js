class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        const charCounts = new Map();
        let left = 0;
        let maxLetter = 0;
        for (let right = 0; right < s.length; right++) {
            charCounts.set(s[right], (charCounts.get(s[right]) || 0) + 1);
            maxLetter = Math.max(maxLetter, charCounts.get(s[right]));
            while (maxLetter + k < right + 1 - left && left < right) {
                charCounts.set(s[left], charCounts.get(s[left]) - 1);
                left++;
            }
            
            maxLength = Math.max(maxLength, right + 1 - left);
        }

        return maxLength;
    }
}

/*
 XYYX
 lr--->
-> sliding window
-> create map of characters
move left when window size >= k + max letter count
move right
add to map
keep track of max window size

AABABB
A->2
B->1
max -> 3
A->3
B->1
max -> 4
move left
A->1
B->2
...
 */
