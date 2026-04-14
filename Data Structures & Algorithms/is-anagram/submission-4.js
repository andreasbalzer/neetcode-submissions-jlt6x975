class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const aCode = "a".charCodeAt(0);
        const charCounts = new Array(26).fill(0);
        for (let index = 0; index < s.length; index++) {
            charCounts[s.charCodeAt(index) - aCode]++;
            charCounts[t.charCodeAt(index) - aCode]--;
        }

        for (let char = 0; char < 26; char++) {
            if (charCounts[char] !== 0) {
                return false;
            }
        }

        return true;
    }
}
