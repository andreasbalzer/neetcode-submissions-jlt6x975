class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const memory = new Map(); // sorted string to strings
        for (let str of strs) {
            const sorted = str.split("").sort().join("");
            if (!memory.has(sorted)) {
                memory.set(sorted, []);
            }
            memory.get(sorted).push(str);
        }

        return Array.from(memory.values());
    }
}
