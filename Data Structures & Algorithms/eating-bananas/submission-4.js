class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxPile = Math.max.apply(null, piles);
        let left = 1;
        let right = maxPile;
        let result = right;
        while (left <= right) {
            const mid = Math.floor((right - left) / 2 + left);
            let timeNeeded = 0;
            for (let pile = 0; pile < piles.length; pile++) {
                timeNeeded += Math.ceil(piles[pile] / mid);
            }

            if (timeNeeded <= h) {
                result = mid;
                right = mid - 1;
            }
            if (timeNeeded > h) {
                left = mid + 1;
            }
        }

        return result;
    }
}
