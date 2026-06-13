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
        const dfs = (day, balance, lastAction) => {
            const key = `${day}-${balance}-${lastAction}`;
            if (day === prices.length) {
                return balance;
            }

            if (memory.has(key)) {
                return memory.get(key);
            }

            let max = 0;
            if (lastAction === actions.cooldown) {
                max = Math.max(max, Math.max(dfs(day + 1, balance - prices[day], actions.bought), dfs(day + 1, balance, actions.cooldown)));
            }
            if (lastAction === actions.sold) {
                max = Math.max(max, dfs(day + 1, balance, actions.cooldown));
            }
            if (lastAction === actions.bought) {
                max = Math.max(Math.max(max, dfs(day + 1, balance, actions.bought)), dfs(day + 1, balance + prices[day], actions.sold));
            }
            memory.set(key, max);
            return max;
        };
        return dfs(0, 0, actions.cooldown);
    }
}
