class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
      /*  const dp = new Array(amount + 1).fill(Number.POSITIVE_INFINITY);
        
        dp[0] = 0;


        for (let i = 1; i < dp.length; i++) {
            for (let coin = 0; coin < coins.length; coin++) {
                if (i - coins[coin] < 0) {
                    break;
                }
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[coin]]);
            }
        }

        return dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount];
*/
        
        const memory = new Map();
        const dfs = (value, coinCount) => {
            if (value === amount) {
                return coinCount;
            }
           
            if (value > amount) {
                return -1;
            }
            const key = `${value} ${coinCount}`;
            if (memory.has(key)) {
                return memory.get(key);
            }

            let min = Number.POSITIVE_INFINITY;
            for (let i = 0; i < coins.length; i++) {
                const res = dfs(value + coins[i], coinCount + 1);
                if (res !== -1) {
                    min = Math.min(min, res);
                }
            }

            const res = min === Number.POSITIVE_INFINITY ? -1 : min;
            memory.set(key, res);
            return res;
        }

        return dfs(0, 0);
    }
}
