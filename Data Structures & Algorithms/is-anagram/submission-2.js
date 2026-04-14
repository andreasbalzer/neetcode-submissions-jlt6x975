class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // slog(s) + tlog(t)
        return s.split("").sort().join("") === t.split("").sort().join("");
    }
}
