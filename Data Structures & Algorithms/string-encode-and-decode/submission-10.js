class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (const s of strs) {
            result += s.length + "#" + s;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let length = 0;
        for (let index = 0; index < str.length; index++) {
            
            if (str[index] === "#") {
                const word = str.substring(index + 1, index + 1 + length);
                result.push(word);
                index += length;
                length = 0;
            }
            else {
                length *= 10;
                length += parseInt(str[index], 10);
            }
        }

        return result;
    }
}