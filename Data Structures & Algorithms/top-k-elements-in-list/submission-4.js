class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
/**
 * [5,2,6,8,1]
        ^partitionIndex
    l       r
   [5,2,1,8,6]
    l       rp
          l rp
    5,2,1,8, 6
          lr p
    5,2,1,6, 8
          lr p            

 
 */

        const getPivotIndex = (left, right, retrieval) => {
            const middle = Math.floor(left + (right - left) / 2);
            swap(middle, right);
            const tempPivotIndex = right;
            const pivotValue = nums[tempPivotIndex];

            while (left < right) {
                while (left < right && retrieval(nums[left]) < retrieval(pivotValue)) {
                    left++;
                }

                while (left < right && retrieval(nums[right]) >= retrieval(pivotValue)) {
                    right--;
                }

                swap(left, right);
            }

            swap(left, tempPivotIndex);

            return left;
        };

        const quickSelect = (left, right, retrieval) => {
            const pivotIndex = getPivotIndex(left, right, retrieval);
            if (pivotIndex === nums.length - k) {
                return pivotIndex;
            }

            if (pivotIndex < nums.length - k) {
                return quickSelect(pivotIndex + 1, right, retrieval);
            }

            return quickSelect(left, pivotIndex - 1, retrieval);
        };

        const swap = (left, right) => {
            [nums[right], nums[left]] = [nums[left], nums[right]];
        }

        const frequencies = new Map();
        for (let num of nums) {
            frequencies.set(num, (frequencies.get(num) || 0) + 1);
        }

        nums = Array.from((new Set(nums)).values());

        console.log(nums);
        console.log(frequencies);
        const partitionIndex = quickSelect(0, nums.length - 1, (number) => frequencies.get(number));
        console.log(nums);
        console.log(partitionIndex);
        return nums.slice(partitionIndex);
    }
}
