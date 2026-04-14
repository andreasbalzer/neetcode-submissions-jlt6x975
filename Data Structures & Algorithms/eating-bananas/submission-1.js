class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const timeToEatBuckets = (num) => {
            return piles.reduce((accumulator, current) => accumulator + Math.ceil(current / num), 0);
        };

        let left = 0;
        let right = Math.max.apply(null, piles);
        let result = right;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const needHours = timeToEatBuckets(mid);
            
            if (needHours <= h) {
                result = mid;
                right = mid - 1;
            }
            else if (needHours > h) {
                left = mid + 1;
            }
        }

        return result;
    }
}
