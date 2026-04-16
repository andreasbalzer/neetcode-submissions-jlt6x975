class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Counts = new Array(26).fill(0);
        let s2Counts = new Array(26).fill(0);
        const aCode = "a".charCodeAt(0);
        for (let index = 0; index < s1.length; index++) {
            s1Counts[s1.charCodeAt(index) - aCode]++;
            s2Counts[s2.charCodeAt(index) - aCode]++;
        }

        console.log(s1Counts);
        console.log(s2Counts);
        let matches = s2Counts.reduce((acc, current, index) => acc += (s1Counts[index] === s2Counts[index] ? 1 : 0), 0);

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) {
                return true;
            }

            s2Counts[s2.charCodeAt(right) - aCode]++;
            if (s2Counts[s2.charCodeAt(right) - aCode] === s1Counts[s2.charCodeAt(right) - aCode]) {
                matches++;
            }
            else if (s2Counts[s2.charCodeAt(right) - aCode] === s1Counts[s2.charCodeAt(right) - aCode] + 1) {
                matches--;
            }

            s2Counts[s2.charCodeAt(left) - aCode]--;
            if (s2Counts[s2.charCodeAt(left) - aCode] === s1Counts[s2.charCodeAt(left) - aCode]) {
                matches++;
            }
            else if (s2Counts[s2.charCodeAt(left) - aCode] === s1Counts[s2.charCodeAt(left) - aCode] - 1) {
                matches--;
            } 

            left++;
        }

        
        return matches === 26;

    }
}
