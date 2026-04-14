class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const combined = nums1.concat(nums2);
        combined.sort((a, b) => a - b);
        console.log(combined);
        if (combined.length % 2 === 1) {
            return combined[Math.floor(combined.length / 2)];
        }

        return (combined[Math.floor(combined.length / 2) - 1] + combined[Math.floor(combined.length / 2)]) / 2;
    }
}
