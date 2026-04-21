class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }
        const half = Math.floor((nums1.length + nums2.length + 1) / 2);
        /*
        odd: take middle element
        even: take two in middle and divide by 2

        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                       5+6/2
                
        when nums1.length is smaller than half, then half needs to be in nums2.
        we take x elements from nums1, so we need to take half-x from nums2 to find half        
        
        nums1 = [ 1, 2, 3, 10]
        nums2 = [ 4, 5, 6, 7, 8, 9] is longer array
        
         */

        let left1 = 0;
        let right1 = nums1.length;
        while (left1 <= right1) {
            const mid1 = Math.floor((right1 - left1) / 2 + left1);
            const mid2 = half - mid1;

            const nums1Left = mid1 > 0 ? nums1[mid1 - 1] : Number.MIN_SAFE_INTEGER;
            const nums1Right = mid1 < nums1.length ? nums1[mid1] : Number.MAX_SAFE_INTEGER;

            const nums2Left = mid2 > 0 ? nums2[mid2 - 1] : Number.MIN_SAFE_INTEGER;
            const nums2Right = mid2 < nums2.length ? nums2[mid2] : Number.MAX_SAFE_INTEGER;

            if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
                return (nums1.length + nums2.length) % 2 === 0 ? (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2 : Math.max(nums1Left, nums2Left);
            }
            else if (nums1Left > nums2Right) {
                right1 = mid1 - 1;
            }
            else {
                left1 = mid1 + 1;
            }
        }

        return -1;
    }
}
