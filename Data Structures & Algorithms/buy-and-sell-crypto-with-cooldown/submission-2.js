class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const actions = {
            cooldown: "cooldown",
            bought: "bought",
            sold: "sold",
        };

        const memory = new Map();
        const dfs = (day, lastAction) => {
            const key = `${day}-${lastAction}`;
            if (day === prices.length) {
                return 0;
            }

            if (memory.has(key)) {
                return memory.get(key);
            }

            let max = 0;
            if (lastAction === actions.cooldown) {
                max = Math.max(max, Math.max(dfs(day + 1, actions.bought) - prices[day], dfs(day + 1, actions.cooldown)));
            }
            if (lastAction === actions.sold) {
                max = Math.max(max, dfs(day + 1, actions.cooldown));
            }
            if (lastAction === actions.bought) {
                max = Math.max(Math.max(max, dfs(day + 1, actions.bought)), dfs(day + 1, actions.sold) + prices[day]);
            }
            memory.set(key, max);
            return max;
        };
        return dfs(0, actions.cooldown);
    }
}
