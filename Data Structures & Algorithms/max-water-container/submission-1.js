class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let leftHeight = 0;
        let rightHeight = 0;
        let leftIndex = 0;
        let rightIndex = heights.length - 1;

        while (leftIndex < rightIndex) {
            leftHeight = heights[leftIndex];
            rightHeight = heights[rightIndex];
            maxArea = Math.max(maxArea, (rightIndex - leftIndex) * Math.min(leftHeight, rightHeight));
            if (leftHeight < rightHeight) {
                leftIndex++;
            }
            else {
                rightIndex--;
            }
        }

        return maxArea;
    }
}
