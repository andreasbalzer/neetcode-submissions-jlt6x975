class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // is s1 a permutation in s2?
        // sliding window
        // left, right, incrementing right to end of string, incrementing left to satisfy condition right + 1 - left === s1.length
        // map for s1 and s2 with character --> frequency
        if (s1.length > s2.length) {
            return false;
        }
        
        let left = 0;
        let right = s1.length;
        const s1Map = (new Array(26)).fill(0);
        const s2Map = (new Array(26)).fill(0);
        
        for (let index = 0; index < s1.length; index++) {
            s1Map[s1[index].charCodeAt(0) - "a".charCodeAt(0)]++;
            s2Map[s2[index].charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        let matches = s1Map.reduce((accumulator, current, index) => accumulator + ((s2Map[index] === current) ? 1 : 0), 0);

        while (right < s2.length) {
            if (matches === 26) {
                return true;
            }

            s2Map[s2[right].charCodeAt(0) - "a".charCodeAt(0)]++;
            if (s2Map[s2[right].charCodeAt(0) - "a".charCodeAt(0)] === s1Map[s2[right].charCodeAt(0) - "a".charCodeAt(0)]) {
                matches++;
            }
            else if (s2Map[s2[right].charCodeAt(0) - "a".charCodeAt(0)] === s1Map[s2[right].charCodeAt(0) - "a".charCodeAt(0)] + 1) {
                matches--;
            }

            s2Map[s2[left].charCodeAt(0) - "a".charCodeAt(0)]--;
            if (s2Map[s2[left].charCodeAt(0) - "a".charCodeAt(0)] === s1Map[s2[left].charCodeAt(0) - "a".charCodeAt(0)]) {
                matches++;
            }
            else if (s2Map[s2[left].charCodeAt(0) - "a".charCodeAt(0)] === s1Map[s2[left].charCodeAt(0) - "a".charCodeAt(0)] - 1) {
                matches--;
            }    
            
            left++;
            right++;
        }

        return matches === 26;
    }
}
 