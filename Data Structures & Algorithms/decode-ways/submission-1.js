class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let n1 = 1;
        let n2 = 0;
        let n = 0;
        for (let index = s.length - 1; index >= 0; index--) {
            if (s[index] === "0") {
                n = 0;
            }
            else {
                n = n1;

                if (index + 1 < s.length && parseInt(s[index] + s[index + 1]) < 27) {
                    n += n2;
                }
            }

            n2 = n1;
            n1 = n;
            n = 0;

        }

        return n1;
    }
}
