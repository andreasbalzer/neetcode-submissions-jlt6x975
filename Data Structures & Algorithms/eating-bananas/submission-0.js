class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max.apply(null, piles);
        let k = right;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const hoursNeeded = piles.reduce((accumulator, currentPile) => accumulator += Math.ceil(currentPile / mid), 0);
            
            if (hoursNeeded > h) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
                k = mid;
            }
        }

        return k;
    }
}
