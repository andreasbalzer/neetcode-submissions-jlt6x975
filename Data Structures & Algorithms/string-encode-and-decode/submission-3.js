class Solution {
    /**
     * "neet" "code" "love"
     * "4#neet4#code"
     * 
     * 
     */
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        for (let index = 0; index < strs.length; index++) {
            strs[index] = `${strs[index].length}#${strs[index]}`;
        }
    
        const output = strs.join("");
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const output = [];
        let length = 0;
        for (let index = 0; index < str.length; index++) {
            if (!isNaN(str[index])) {
                length = length * 10 + parseInt(str[index], 10);
            }
            else if (str[index] === "#") {
                output.push(str.substring(index + 1, index + 1 + length));
                index += length;
                length = 0;
            }
        }

        return output;
    }
}
