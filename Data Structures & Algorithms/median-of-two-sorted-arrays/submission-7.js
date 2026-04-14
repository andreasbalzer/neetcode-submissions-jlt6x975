class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let [A, B] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];

        let left = 0;
        let right = A.length;
        let half = Math.round((A.length + B.length) / 2);
        while(left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const rest = half - mid;

            const Aleft = mid > 0 ? A[mid - 1] : Number.NEGATIVE_INFINITY;
            const Aright = mid < A.length ? A[mid] : Number.POSITIVE_INFINITY;
            const Bleft = rest > 0 ? B[rest - 1] : Number.NEGATIVE_INFINITY;
            const Bright = rest < B.length ? B[rest] : Number.POSITIVE_INFINITY;
            if (Aleft <= Bright && Bleft <= Aright) {
                if ((A.length + B.length) % 2) {
                    return Math.max(Aleft, Bleft);
                }
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;

            }
            if (Aleft > Bright) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }

        }

        return -1;


    }
}
