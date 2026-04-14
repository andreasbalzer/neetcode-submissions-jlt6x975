class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const binarySearch = (bounds, equalCheckCallback, goLeftCheckCallback) => {
            let left = 0;
            let right = bounds - 1;
            while (left <= right) {
                const mid = Math.floor(left + (right - left) / 2);
                if (equalCheckCallback(mid)) {
                    return mid;
                }
                else if (goLeftCheckCallback(mid)) {
                    right = mid - 1;
                }
                else {
                    left = mid + 1;
                }
            }

            return -1;
        };

        const row = binarySearch(
            matrix.length,
            (mid) => matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target,
            (mid) => matrix[mid][0] > target
            );
        if (row === -1) {
            return false;
        }

        const column = binarySearch(
            matrix[row].length,
            (mid) => matrix[row][mid] === target,
            (mid) => matrix[row][mid] > target
            );

        return column !== -1;
    }
}
