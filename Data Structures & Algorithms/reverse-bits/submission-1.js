class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        console.log(n.toString(2));
        let result = 0;
        for (let index = 0; index < 32; index++) {
            console.log(`${index} current r ${result.toString(2)}`);
            result <<= 1;
            result |= n & 1;
            n >>>= 1;
        }
        result >>>= 0;
        console.log(result.toString(2));
        console.log(result.toString(2).length);
        return result;
    }
}
