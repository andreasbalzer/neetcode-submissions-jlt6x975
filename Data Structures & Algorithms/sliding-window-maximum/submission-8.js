class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = []; // -> [value, index];
        for (let i = 0; i < k; i++) {
            while (deque.length && deque[deque.length - 1][0] < nums[i]) {
                deque.pop();
            }
            deque.push([nums[i], i]);
        }
        console.log(deque);

        const result = [deque[0][0]];
        let left = 0;
        for (let right = k; right < nums.length; right++) {
            while (deque.length && deque[deque.length - 1][0] < nums[right]) {
                deque.pop();
            }

            deque.push([nums[right], right]);

            while (deque[0][1] <= left) {
                deque.shift();
            }

            result.push(deque[0][0]);
            left++;
        }

        return result;
    }
}
