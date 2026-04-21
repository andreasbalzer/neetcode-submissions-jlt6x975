class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const findStartIndex = () => {
            let left = 0;
            let right = nums.length - 1;
            while (left < right) {
                const mid = Math.floor((right - left) / 2 + left);
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

        const startIndex = findStartIndex();
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((right - left) / 2 + left);
            if (nums[(mid + startIndex)%nums.length] === target) {
                return (mid + startIndex)%nums.length;
            } 
            if (nums[(mid + startIndex)%nums.length] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
