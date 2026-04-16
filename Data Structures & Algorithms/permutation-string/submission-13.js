class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Counts = new Map();
        for (let char of s1) {
            s1Counts.set(char, (s1Counts.get(char) || 0) + 1);
        }
        console.log(s1Counts);

        let s2Counts = new Map();
        let left = 0;
        for (let right = 0; right < s2.length; right++) {
            console.log(`left ${left} ${s2[left]} right ${right} ${s2[right]}`);
            console.log(s2Counts);
            s2Counts.set(s2[right], (s2Counts.get(s2[right]) || 0) + 1);
            while ((!s1Counts.has(s2[right]) || s1Counts.get(s2[right]) < s2Counts.get(s2[right])) && left <= right) {
                console.log(`left shift ${left} ${s2[left]}`);
                s2Counts.set(s2[left], s2Counts.get(s2[left]) - 1);
                if (s2Counts.get(s2[left]) === 0) {
                    s2Counts.delete(s2[left]);
                }
                left++;
            }

            const matches = Array.from(s2Counts.keys()).filter((key) => s2Counts.get(key) === s1Counts.get(key)).length;
            console.log (`matches ${matches}`);
            if (matches === s1Counts.size) {
                return true;
            }
        }

        return false;
    }
}
