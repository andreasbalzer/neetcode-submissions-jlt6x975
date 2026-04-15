class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMaxHeight = 0;
        let rightMaxHeight = 0;
        let left = 0;
        let right = height.length - 1;

        let trappedWater = 0;

        while (left < right) {
            leftMaxHeight = Math.max(leftMaxHeight, height[left]);
            rightMaxHeight = Math.max(rightMaxHeight, height[right]);

            if (leftMaxHeight <= rightMaxHeight) {
                const leftCurrentWater =  Math.min(leftMaxHeight, rightMaxHeight) - height[left];
                trappedWater += leftCurrentWater;
                left++;
            }
            else {
                const rightCurrentWater = Math.min(leftMaxHeight, rightMaxHeight) - height[right];
                trappedWater += rightCurrentWater;
                right--;
            }
        }

        return trappedWater;
    }
}
