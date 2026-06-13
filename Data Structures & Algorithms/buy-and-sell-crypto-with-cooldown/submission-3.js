class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const actions = {
            bought: "bought",
            sold: "sold",
        };

        const memory = new Map();
        const dfs = (day, lastAction) => {
            const key = `${day}-${lastAction}`;
            
            if (day >= prices.length) {
                return 0;
            }

            if (memory.has(key)) {
                return memory.get(key);
            }

            let max = 0;
            const cooldown = dfs(day + 1, lastAction);
            if (lastAction === actions.sold) {
                const bought = dfs(day + 1, actions.bought) - prices[day];
                max = Math.max(bought, cooldown);
            }
            if (lastAction === actions.bought) {
                const sold = dfs(day + 2, actions.sold) + prices[day];
                max = Math.max(cooldown, sold);
            }
            memory.set(key, max);
            return max;
        };
        return dfs(0, actions.sold);
    }
}
