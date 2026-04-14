class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        const queue = [];
        const visit = new Set();
        queue.push([0, nums[0]]);
        let count = 0;
        while (queue.length) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const current = queue.shift();
                if (current[0] == nums.length - 1) {
                    return count;
                }
                for (let jumpLength = 1; jumpLength <= current[1]; jumpLength++) {
                    if (!visit.has(current[0] + jumpLength)) {
                        visit.add(current[0] + jumpLength);
                        queue.push([current[0] + jumpLength, nums[current[0] + jumpLength]]);
                    }
                }
            }
            count++;
        }

        return count;
    }
}
