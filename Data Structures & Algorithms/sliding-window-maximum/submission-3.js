class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0;
        let right = 0;
        let result = [];

        let deque = []; // 121 remove head if head is smaller than tail

        while (right < nums.length) {

            
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[right]) {
                deque.pop();
            }
            deque.push(right);
            
            if (deque[0] < left) {
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
