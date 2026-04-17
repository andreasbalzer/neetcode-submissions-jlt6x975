class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let shortestChars = "";
        let shortestLength = Number.POSITIVE_INFINITY;
        
        const countsS = new Map();
        const countsT = new Map();
        for (let char of t) {
            countsT.set(char, (countsT.get(char) || 0) + 1);
        }

        let left = 0;
        let matches = 0;
        for (let right = 0; right < s.length; right++) {
            countsS.set(s[right], (countsS.get(s[right]) || 0) + 1);
            if (countsT.has(s[right]) && countsS.get(s[right]) === countsT.get(s[right])) {
                matches++;
            }

            

            while (matches === countsT.size && left <= right) {
                if (matches === countsT.size && shortestLength > right + 1 - left) {
                    shortestLength = right + 1 - left;
                    shortestChars = s.substring(left, right + 1);
                }
                
                countsS.set(s[left], countsS.get(s[left]) - 1);
                if (countsT.has(s[left]) && countsS.get(s[left]) === countsT.get(s[left]) - 1) {
                    matches--;
                }

                left++;
            }
        }

        return shortestChars;
    }
}
