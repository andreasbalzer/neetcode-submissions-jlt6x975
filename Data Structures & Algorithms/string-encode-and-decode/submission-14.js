class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        console.log(str);
        for (let index = 0; index < str.length; index++) {
            const strLength = Number(str.substring(index, str.indexOf("#", index)));
            index = str.indexOf("#", index) + 1;
            result.push(str.substring(index, index + strLength));
            index = index + strLength;
            index--;
        }

        return result;
    }
}
