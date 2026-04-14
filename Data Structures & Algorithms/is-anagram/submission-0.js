class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const memory = (new Array(256)).fill(0);
        for (const character of s) {
            memory[character.charCodeAt(0)]++;
        }

 console.log(memory);

        for (const character of t) {
            if (memory[character.charCodeAt(0)] <= 0) {
                return false;
            }
            memory[character.charCodeAt(0)]--;
        }

        return memory.reduce((acc, current) => acc + current, 0) === 0;
    }
}
