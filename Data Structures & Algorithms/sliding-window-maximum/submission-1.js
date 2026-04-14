class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // deque remove smaller elements when pushing new element
        // l,r; r < length; l<r; r+1-l <= k
        const result = [];
        const deque = [];
        let left = 0;
        let right = 0;
        while (right < nums.length) {
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[right]) {
                deque.pop();
            }
            deque.push(right);

            if (left > deque[0]) {
                deque.shift();
            }

            if (right + 1 >= k) {
                result.push(nums[deque[0]]);
                left++;
            }

            right++;
        }

        return result;
    }
}
