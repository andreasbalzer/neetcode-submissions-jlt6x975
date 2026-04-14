class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
/**
 * sliding window
 * 
 * [lecabee]  [abc]
 * map from char -> frequency
 * s1Map:
 * a -> 1
 * b -> 1
 * c -> 1   
 * 
 * s2Map:
 * 
 * left = 0
 * right = 0
 * 
 * [lec  abee]
 *    lr       .. c-> 1 matches = 1
 *    l  r     .. a->1 matches = 2
 *    l   r    .. b->1 matches = 3
 * 
 
 * 
 * 
 */
        if (s1.length > s2.length) {
            return false;
        }

        let left = 0;
        let right = s1.length;
        let matches = 0;
        const s1Map = new Map();
        const s2Map = new Map();

        for (let index = 0; index < s1.length; index++) {
            s1Map.set(s1[index], (s1Map.get(s1[index]) || 0) + 1);
            s2Map.set(s2[index], (s2Map.get(s2[index]) || 0) + 1);
        }

        for (let index = 0; index < 26; index++) {
            if (s1Map.get(String.fromCharCode("a".charCodeAt(0) + index)) == s2Map.get(String.fromCharCode("a".charCodeAt(0) + index))) {
                matches++;
            }
        }

        console.log(s1Map);
        console.log(s2Map);
        console.log(`matches ${matches}`);

        while (right < s2.length) {
            console.log(s1Map);
            if (matches === 26) {
                return true;
            }

            s2Map.set(s2[right], (s2Map.get(s2[right]) || 0) + 1);
            if (s2Map.get(s2[right]) === (s1Map.get(s2[right]) || 0)) {
                matches++;
            }
            else if (s2Map.get(s2[right]) === (s1Map.get(s2[right]) || 0) + 1) {
                matches--;
            }
            
            s2Map.set(s2[left], s2Map.get(s2[left]) - 1);

            if (s2Map.get(s2[left]) === (s1Map.get(s2[left]) || 0)) {
                matches++;
            }
            else if (s2Map.get(s2[left]) === (s1Map.get(s2[left]) || 0) - 1) {
            
                matches--;
            }   
            left++;
            right++;
            console.log(s2Map);
        }

        return matches === 26;

    }
}
 