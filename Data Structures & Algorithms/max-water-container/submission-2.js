class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let leftIndex = 0;
        let rightIndex = heights.length - 1;

        while (leftIndex < rightIndex) {
            maxArea = Math.max(maxArea, (rightIndex - leftIndex) * Math.min(heights[leftIndex], heights[rightIndex]));
            if (heights[leftIndex] < heights[rightIndex]) {
                leftIndex++;
            }
            else {
                rightIndex--;
            }
        }

        return maxArea;
    }
}
