class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let maxProfit = 0;
        while (right < prices.length) {
            
            if (prices[left] < prices[right]) {
                const newProfit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, newProfit);
            }
            else {
                left = right;
            }

            right++;
        }

        return maxProfit;
    }
}
