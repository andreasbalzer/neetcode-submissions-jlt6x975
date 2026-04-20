class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const binarySearch = (left, right, equalCondition, moveLeftCondition) => {
            while (left <= right) {
                const mid = Math.floor((right - left) / 2 + left);
                if (equalCondition(mid)) {
                    return mid;
                }
                else if (moveLeftCondition(mid)) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }

            return -1;
        };

        const rowIndex = binarySearch(
            0,
            matrix.length - 1,
            (mid) => matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target,
            (mid) => matrix[mid][0] < target);

            if (rowIndex === -1) {
                return false;
            }

            const colIndex = binarySearch(
                0,
                matrix[rowIndex].length - 1,
                (mid) => matrix[rowIndex][mid] === target,
                (mid) => matrix[rowIndex][mid] < target
            );

            return colIndex >= 0;
    }
}
