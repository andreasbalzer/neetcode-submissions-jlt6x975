class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const findMinIndex = () => {
            let left = 0;
            let right = nums.length - 1;
            let start = 0;
            while (left < right) {
                const mid = Math.floor(left + (right - left) / 2);
                if (nums[mid] > nums[mid + 1]) {
                    start = mid + 1;
                }
                if (nums[mid] < nums[right]) {
                    right = mid;
                }
                else {
                    left = mid + 1;
                }
            }

            return start;
        };

        const minIndex = findMinIndex();
        console.log(`minIndex ${minIndex} nums[minIndex] ${nums[minIndex]}`);

        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const minNum = nums[(mid + minIndex) % nums.length];
            console.log(`left ${left} right ${right} mid ${mid} nums[midrot] ${minNum}`);
            if (minNum === target) {
                return (mid + minIndex) % nums.length;
            }
            if (minNum < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }

        return -1;
    }

}
 