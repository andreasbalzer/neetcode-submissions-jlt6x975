class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        for (let index = 0; index < 32; index++) {
            count += n & 1;
            n >>>= 1;
        }

        return count;
    }
}
