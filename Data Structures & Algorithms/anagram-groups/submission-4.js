class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const aCode = "a".charCodeAt(0);
        const groups = new Map();
        for (let str of strs) {
            const counts = new Array(26).fill(0);
            for (let index = 0; index < str.length; index++) {
                counts[str.charCodeAt(index) - aCode]++;
            }

            const key = counts.join("-");
            const group = groups.get(key) || [];
            group.push(str);
            groups.set(key, group);
        }

        return Array.from(groups.values());

    }
}
