class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const dp = new Array(text1.length + 1).fill(1).map((_) => new Array(text2.length + 1).fill(0));
        for (let index1 = text1.length - 1; index1 >= 0; index1--) {
            for (let index2 = text2.length - 1; index2 >= 0; index2--) {
                if (text1[index1] === text2[index2]) {
                    dp[index1][index2] = dp[index1 + 1][index2 + 1] + 1;
                }
                else {
                    dp[index1][index2] = Math.max(dp[index1 + 1][index2], dp[index1][index2 + 1]);
                }
            }
        } 
        console.log(dp);
        return dp[0][0];
    }


    /*
        c   a   t
    c   3   2   1   0
    r   2   2   1   0
    a   2   2   1   0
    b   1   1   1   0
    t   1   1   1   0
        0   0   0   0

        if same, then diagonally, otherwise max of down and right
    */
}
