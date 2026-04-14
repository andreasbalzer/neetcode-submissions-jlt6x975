class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let min = prices[0];
        for (let index = 0; index < prices.length; index++) {
            if (min > prices[index]) {
                min = prices[index];
            }
            max = Math.max(max, prices[index] - min);
        }

        return max;

    }
}
