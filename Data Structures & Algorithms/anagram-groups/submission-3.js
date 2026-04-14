class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /*        
        const storage = new Map();
        for (const str of strs) {
            const sorted = str.split("").sort().join("");
            if (!storage.has(sorted)) {
                storage.set(sorted, [str]);
            }
            else {
                storage.get(sorted).push(str);
            }
        }
        return Array.from(storage.values());
        */
        const categorized = new Map();
        for (const s of strs) {
            let counts = new Array(26).fill(0);
            for (const c of s.split("")) {
                const charIndex = c.charCodeAt(0) - "a".charCodeAt(0);
                counts[charIndex]++;
            }
            const key = counts.join("-");
            if (!categorized.has(key)) {
                categorized.set(key, []);
            }
            categorized.get(key).push(s);
        }

        return Array.from(categorized.values());
        
    }
}
