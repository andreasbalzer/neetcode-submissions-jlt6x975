class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let maxLeft = height[left];
        let maxRight = height[right];
        let water = 0;

        while (left < right) {
            if (maxLeft < maxRight) {
                const currentWater = maxLeft - height[left];
                if (currentWater > 0) {
                    water+= currentWater;
                }
                left++; 
                maxLeft = Math.max(maxLeft, height[left]);
            }
            else {
                
                const currentWater = maxRight - height[right];
                if (currentWater > 0) {
                    water+= currentWater;
                }
                right--; 
                maxRight = Math.max(maxRight, height[right]);
            }
            
        }


        return water;
    }
}
