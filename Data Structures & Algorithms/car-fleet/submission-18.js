class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const carFleets = [];
        for (let carFleet = 0; carFleet < position.length; carFleet++) {
            carFleets[carFleet] = {
                position: position[carFleet],
                speed: speed[carFleet],
                arriveAt: (target - position[carFleet]) / speed[carFleet]
            };
        }
        
        carFleets.sort((a, b) => a.position - b.position);

        let carFleetCount = carFleets.length;
        for (let index = carFleets.length - 1; index > 0; index--) {
           if (carFleets[index].arriveAt >= carFleets[index - 1].arriveAt) {
            carFleetCount--;
            const slower = carFleets[index];
            carFleets[index - 1].arriveAt = slower.arriveAt;
           } 

        }

        return carFleetCount;
    }
}
