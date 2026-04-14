class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        const s1Map = (new Array(26)).fill(0);
        const s2Map = (new Array(26)).fill(0);
        for (let index = 0; index < s1.length; index++) {
            s1Map[s1.charCodeAt(index) - "a".charCodeAt(0)]++;
            s2Map[s2.charCodeAt(index) - "a".charCodeAt(0)]++;
        }

        let matchesBetweenMaps = s1Map.reduce((accumulator, current, index) => accumulator + ((current === s2Map[index]) ? 1 : 0), 0);

        let left = 0;
        let right = s1.length;
        while (right < s2.length) {
            if (matchesBetweenMaps === 26) {
                return true;
            }

            s2Map[s2.charCodeAt(right) - "a".charCodeAt(0)]++;
            if (s2Map[s2.charCodeAt(right) - "a".charCodeAt(0)] === s1Map[s2.charCodeAt(right) - "a".charCodeAt(0)]) {
                matchesBetweenMaps++;
            }
            else if (s2Map[s2.charCodeAt(right) - "a".charCodeAt(0)] === s1Map[s2.charCodeAt(right) - "a".charCodeAt(0)] + 1) {
                matchesBetweenMaps--;
            }

            s2Map[s2.charCodeAt(left) - "a".charCodeAt(0)]--;
            if (s2Map[s2.charCodeAt(left) - "a".charCodeAt(0)] === s1Map[s2.charCodeAt(left) - "a".charCodeAt(0)]) {
                matchesBetweenMaps++;
            }
            else if (s2Map[s2.charCodeAt(left) - "a".charCodeAt(0)] === s1Map[s2.charCodeAt(left) - "a".charCodeAt(0)] - 1) {
                matchesBetweenMaps--;
            }

            left++;
            right++;
        }

        console.log(s2Map);
        console.log(matchesBetweenMaps);

        return matchesBetweenMaps === 26;
    }
}
