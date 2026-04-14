class Solution {

    /**
     * neet
     * 4#neet
     * 
     */
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";
        for (let str of strs) {
            output += `${str.length}#${str}`; 
        }

console.log(output);
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const output = [];
        let isInNumber = true;
        let length = 0;
        for (let index = 0; index < str.length; index++) {
            if (length === 0) {
                isInNumber = true;
                output.push("");
            }

            if (isInNumber && !isNaN(str[index])) {
                length *= 10;
                length += parseInt(str[index], 10);
            }
            else if (isInNumber && str[index] === "#") {
                isInNumber = false;
            }
            else {
                output[output.length - 1] += str[index];
                length--;
            }
        }
        if (output[0] === "") {
            output.shift();
        }
        return output;
    }
}
