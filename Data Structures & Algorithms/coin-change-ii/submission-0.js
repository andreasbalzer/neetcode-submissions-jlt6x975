class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = new Array(amount + 1).fill(0).map((row) => new Array(coins.length + 1).fill(0));
        dp[0].fill(1);
        for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
            for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
                const coin = coins[coinIndex];
                if (coin > currentAmount) {
                    dp[currentAmount][coinIndex + 1] = dp[currentAmount][coinIndex];
                    continue;
                } 
                const previousRow = dp[currentAmount - coin][coinIndex + 1];
                dp[currentAmount][coinIndex + 1] = dp[currentAmount][coinIndex] + previousRow
            }
        }


        return dp[dp.length - 1][dp[0].length - 1];
    }
}


/*
 > amount -> 0
 init both row and column with 0
 edge init 1

  left + (sum of [amount-current] until coin)

    0  1   2   3
0   1  0   0   0
1   0  1   0   0
2   0  1   2   0
3   0  1   2   3
4   0  1   3   4


 */