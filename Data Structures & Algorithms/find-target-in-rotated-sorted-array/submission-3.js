class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const findRot = () => {
            let left = 0;
            let right = nums.length - 1;
            while (left < right) {
                const mid = Math.floor(left + (right - left) / 2);
                if (nums[mid] > nums[mid + 1]) {
                    return mid + 1;
                }
                if (nums[mid] < nums[right]) {
                    right = mid;
                }
                else {
                    left = mid + 1;
                }
            }

            return left;
        };

        const startIndex = findRot();
        console.log(startIndex);
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const rotatedMid = (mid + startIndex)%nums.length;
            if (nums[rotatedMid] === target) {
                return rotatedMid;
            }
            if (nums[rotatedMid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
