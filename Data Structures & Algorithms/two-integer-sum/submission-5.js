class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = new Map();
        for (let index = 0; index < nums.length; index++) {
            numToIndex.set(nums[index], index); 
        }

        for (let index = 0; index < nums.length; index++) {
            const remainder = target - nums[index];
            if (numToIndex.has(remainder) && numToIndex.get(remainder) !== index) {
                return [index, numToIndex.get(remainder)];
            }
        }

        return [-1, -1];

/*
[3,4,5,6] target = 7

3->0
4->1
5->2
6->3



*/


    }
}
