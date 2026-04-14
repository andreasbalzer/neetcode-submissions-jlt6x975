class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let barMaxHeightLeft = 0;
        let barMaxHeightRight = 0;
        let left = 0;
        let right = height.length - 1;
        let storage = 0;
        while (left < right) {
            barMaxHeightLeft = Math.max(barMaxHeightLeft, height[left]);
            barMaxHeightRight = Math.max(barMaxHeightRight, height[right]);            

            if (height[left] <= height[right]) {
                storage += (barMaxHeightLeft - height[left]) > 0 ? barMaxHeightLeft - height[left] : 0;
                left++;
            }
            else {
                storage += (barMaxHeightRight - height[right]) > 0 ? barMaxHeightRight - height[right] : 0;
                right--;
            }
        }
        return storage;
    }
}
