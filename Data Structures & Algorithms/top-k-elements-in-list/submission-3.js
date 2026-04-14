class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const distinctValues = new Set(nums);
        const distinct = Array.from(distinctValues.values());
        const frequencies = new Map();
        nums.forEach((num) => frequencies.set(num, (frequencies.get(num) || 0) + 1));
        const getPartition = (left, right) => {
            const middle = Math.floor(left + (right - left) / 2);
            const partitionValue = distinct[middle];
            const pivotIndex = right;

            swap(middle, right);
            while (left < right) {
                while (left < right && frequencies.get(distinct[left]) < frequencies.get(partitionValue)) {
                    left++;
                }
                while (left < right && frequencies.get(distinct[right]) >= frequencies.get(partitionValue)) {
                    right--;
                }
                swap(left, right);
            }
            swap(left, pivotIndex);

            return left;
        };

        const quickSelect = (left, right, k) => {
            const pivotIndex = getPartition(left, right);
            if (pivotIndex === distinct.length - k) {
                return pivotIndex;
            }

            else if (pivotIndex > distinct.length - k) {
                return quickSelect(left, pivotIndex - 1, k);
            }

            else {
                return quickSelect(pivotIndex + 1, right, k);
            }
        };

        const swap = (left, right) => {
            [distinct[left], distinct[right]] = [distinct[right], distinct[left]];
        };

        return distinct.slice(quickSelect(0,distinct.length - 1, k));
    }
}
