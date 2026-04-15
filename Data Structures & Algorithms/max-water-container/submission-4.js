class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;
        while (left < right) {
            const currentWater = (right - left) * Math.min(heights[left], heights[right]);
            maxWater = Math.max(maxWater, currentWater);
            if (heights[left] < heights[right]) {
                left++;
            }
            else {
                right--;
            }
        }

        return maxWater;
    }
}
