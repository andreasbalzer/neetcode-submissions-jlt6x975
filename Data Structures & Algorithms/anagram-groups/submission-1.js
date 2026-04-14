class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const memory = new Map(); // key -> [string1, string2, string3]
        for (let str of strs) {
            const key = str.split("").sort().join("");
            if (!memory.has(key)) {
                memory.set(key, []);
            }
            memory.get(key).push(str);
        }

        return Array.from(memory.values());
    }
}
