class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        
        let area = 0;
        let leftHeight = 0;
        let rightHeight = 0;
        while (left < right) {
            leftHeight = Math.max(leftHeight, height[left]);    
            rightHeight = Math.max(rightHeight, height[right]);
                
            if (leftHeight < rightHeight) {
                const waterbar = Math.min(leftHeight, rightHeight) - height[left];
                //console.log(`l left ${left} right ${right} leftHeight ${leftHeight} rightHeight ${rightHeight} waterbar ${waterbar} area ${area}`);
                area += waterbar > 0 ? waterbar : 0;
                left++;
            }
            else {
                const waterbar = Math.min(leftHeight, rightHeight) - height[right];
                //console.log(`r left ${left} right ${right} waterbar ${waterbar} area ${area}`);
                area += waterbar > 0 ? waterbar : 0;
                right--;
            }
        }

        return area;
    }
}
