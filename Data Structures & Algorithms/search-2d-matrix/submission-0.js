class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const binarySearch = (left, right, equalComparer, leftComparer) => {
            while (left <= right) {
                const mid = Math.floor(left + (right - left) / 2);
                console.log(`left ${left} right ${right} ${mid}`);
                if (equalComparer(mid)) {
                    return mid;
                }
                if (leftComparer(mid)) {
                    console.log("left");
                    right = mid - 1;
                }
                else {
                    console.log("right");
                    left = mid + 1;
                }
            }
            return -1;
        };

        const row = binarySearch(
            0,
            matrix.length - 1,
            (mid) => matrix[mid][0] <= target && matrix[mid][matrix[0].length - 1] >= target,
            (mid) => matrix[mid][0] > target
        );
        console.log(`row ${row}`);
        if (row === -1) {
            return false;
        }
        const column = binarySearch(
            0,
            matrix[0].length - 1,
            (mid) => matrix[row][mid] === target,
            (mid) => matrix[row][mid] > target
        );
        console.log(`column ${column}`);
        return column !== -1;
    }
}
