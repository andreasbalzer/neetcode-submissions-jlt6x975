class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        while (n !== 0) {
            count += n & 1;
            n >>>= 1;
        }

        return count;
    }
}
