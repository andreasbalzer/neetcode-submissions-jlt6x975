class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const dequeue = [];
        let left = 0;
        let right = 0;
        while (right < k) {
            while (dequeue.length && dequeue[dequeue.length - 1][0] < nums[right]) {
                dequeue.pop();
            }
            dequeue.push([nums[right], right]);
            right++;
        }

        const result = [dequeue[0][0]];
        while (right < nums.length) {
            while (dequeue.length && dequeue[dequeue.length - 1][0] < nums[right]) {
                dequeue.pop();
            }
            dequeue.push([nums[right], right]);
            while (dequeue[0][1] <= left) {
                dequeue.shift();
            }

            result.push(dequeue[0][0]);

            left++;
            right++;
        }

        return result;
    }
}
