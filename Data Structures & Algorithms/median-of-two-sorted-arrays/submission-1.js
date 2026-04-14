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
        let left = 0;
        let right = nums1.length;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const mid2 = half - mid;
            const nums1Left = mid > 0 ? nums1[mid - 1]: Number.MIN_SAFE_INTEGER;
            const nums1Right = mid < nums1.length ? nums1[mid] : Number.MAX_SAFE_INTEGER;
            const nums2Left = mid2 > 0 ? nums2[mid2 - 1] : Number.MIN_SAFE_INTEGER;
            const nums2Right = mid2 < nums2.length ? nums2[mid2] : Number.MAX_SAFE_INTEGER;

            if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
                if ((nums1.length + nums2.length) % 2 === 1) {
                    return Math.max(nums1Left, nums2Left);
                }

                return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
            }
            else if (nums1Left > nums2Right) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }

        return -1;

    }
}
