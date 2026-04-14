class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const binarySearch = (lower, upper, itemsEqualsCallback, itemsSmallerCallback) => {
            let left = lower;
            let right = upper;
            while (left <= right) {
                const mid = Math.round(left + (right - left) / 2);
                if (itemsEqualsCallback(mid)) {
                    return mid;
                }
                if (itemsSmallerCallback(mid)) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }

            return -1;
        };

        const row = binarySearch(
            0,
            matrix.length - 1,
            (mid) => matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target,
            (mid) => matrix[mid][0] < target
        );

        if (row === -1) {
            return false;
        }

        const column = binarySearch(
            0,
            matrix[row].length - 1,
            (mid) => matrix[row][mid] === target,
            (mid) => matrix[row][mid] < target
        );
        
        return column !== -1;
    }
}
