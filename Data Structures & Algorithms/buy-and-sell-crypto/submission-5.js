class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = Number.MAX_SAFE_INTEGER;
        let maxWinnings = 0;
        for (let left = 0; left < prices.length; left++) {
            buyPrice = Math.min(buyPrice, prices[left]);
            const winnings = prices[left] - buyPrice;
            maxWinnings = Math.max(maxWinnings, winnings);
        }

        return maxWinnings;
    }
}
