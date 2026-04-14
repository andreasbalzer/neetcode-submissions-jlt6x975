class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // substring where all characters of t are present, incl. duplicates
        // sliding window over s
        // left, right pointers, right iterating until end of s. left incrementing whenever condition
        // is met, i.e., t in s

        let left = 0;
        let right = 0;
        let start = 0;
        let end = 0;
        let minLength = Number.POSITIVE_INFINITY;
        const sMap = new Map(); // character -> frequency
        const tMap = new Map(); // character -> frequency
        t.split("").forEach((character) => tMap.set(character, (tMap.get(character) || 0) + 1));
        let matches = 0;

        while (right < s.length) {
            sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);
            if (tMap.has(s[right]) && sMap.get(s[right]) === tMap.get(s[right])) {
                matches++;
            }


            while (matches === tMap.size) {
                if (minLength > (right + 1 - left)) {
                    minLength = right + 1 - left;
                    start = left;
                    end = right;
                }
                sMap.set(s[left], sMap.get(s[left]) - 1);

                if (tMap.has(s[left]) && sMap.get(s[left]) < tMap.get(s[left])) {
                    matches--;
                }

                left++;
            }

            
            right++;
        }

        if (minLength === Number.POSITIVE_INFINITY) {
            return "";
        }

        return s.substring(start, end + 1);
    }
}
