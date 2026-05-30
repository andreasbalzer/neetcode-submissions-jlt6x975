class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const map = new Map();
        const dfs = (index) => {
            if (index === s.length) {
                return 1;
            }

            if (s[index] === "0") {
                return 0;
            }

            if (map.has(index)) {
                return map.get(index);
            }

            let count = 0;
            if (index + 1 < s.length &&
                (
                    s[index] === "1" && s[index + 1] === "0" ||
                    parseInt(s[index] + s[index + 1], 10) < 27
                )) {
                count += dfs(index + 2);
            }

            count += dfs(index + 1);
            map.set(index, count);
            return count;
        };
        return dfs(0);
    }
}
