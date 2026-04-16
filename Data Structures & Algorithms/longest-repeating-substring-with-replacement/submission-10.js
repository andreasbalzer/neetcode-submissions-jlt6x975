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
        for (let right = 0; right < s.length; right++) {
            console.log(`####### start loop l ${left} r ${right}`)
            console.log(charCounts);

            charCounts.set(s[right], (charCounts.get(s[right]) || 0) + 1);
            const mostOften = Array.from(charCounts.entries()).sort((a, b) => b[1] - a[1])[0];
            
            console.log(`mostOften ${mostOften && mostOften[1]}`);
            console.log(`cond ${(mostOften && mostOften[1] + k) < right + 1 - left}`);
            console.log(`a ${(mostOften && mostOften[1] + k)} b ${right + 1 - left}`)
            
            while (mostOften && (mostOften[1] + k) < right + 1 - left && left < right) {
                console.log(`left shift`);
                charCounts.set(s[left], charCounts.get(s[left]) - 1);
                left++;
            }
            console.log(`l ${left} r ${right} s ${s[right]}`);
            
            maxLength = Math.max(maxLength, right + 1 - left);
            console.log(`maxLength ${maxLength}`);
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
