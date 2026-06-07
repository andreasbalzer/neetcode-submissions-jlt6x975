class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const total = nums.reduce((accumulator, current) => accumulator + current, 0);
        if (total % 2 !== 0) {
            console.log("fast exit");
            return false;
        }

        const target = total / 2;

        let dp = new Array(total / 2 + 1);
        dp[0] = true;
        for (let num of nums) {
            //console.log(`num ${num}`);
            for (let targetNumber = target; targetNumber >= num; targetNumber--) {
                //console.log(`targetNumber ${targetNumber} dp[targetNumber] ${dp[targetNumber]} dp[t-num] ${dp[targetNumber - num]}`);
                dp[targetNumber] = dp[targetNumber] || dp[targetNumber - num];
            }
        }

        return dp[target] || false;
    }
}
