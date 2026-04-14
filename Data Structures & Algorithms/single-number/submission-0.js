class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        /*
        0001
        0001
        0010
       -----
          10

        xor
        
        
         */
        let xor = 0;
        for (let num of nums) {
            xor ^= num;
        }

        return xor;
    }
}
