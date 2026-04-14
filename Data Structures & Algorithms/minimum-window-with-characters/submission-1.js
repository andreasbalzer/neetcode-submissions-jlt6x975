class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const sMap = new Map();
        const tMap = new Map();

        t.split("").forEach((char) => tMap.set(char, (tMap.get(char) || 0) + 1));

        console.log(tMap);
        let matches = 0;
        let minLength = Number.POSITIVE_INFINITY;
        let start = 0;
        let end = 0;

        let left = 0;
        let right = 0;

        while (right < s.length) {
            console.log(right);
            sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);
            if (tMap.has(s[right]) && tMap.get(s[right]) === sMap.get(s[right])) {
                matches++;
            }

            console.log(`matches ${matches}`);
            while (matches === tMap.size) {
                console.log(`right ${right} left ${left} ${right - left + 1} minLength ${minLength}`);
                if ((right - left + 1) < minLength) {
                    minLength = right - left + 1;
                    console.log(`minLength ${minLength}`);
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
