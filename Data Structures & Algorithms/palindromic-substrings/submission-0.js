class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const expand = (left, right) => {
            let count = 0;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }

            return count;
        };
        let count = 0;
        for (let index = 0; index < s.length; index++) {
            count += expand(index, index);
            count += expand(index, index + 1);
        }

        return count;
    }
}
