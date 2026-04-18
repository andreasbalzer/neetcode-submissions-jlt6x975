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
        
        carFleets.sort((a, b) => b.position - a.position);

        const stack = [];

        for (let index = 0; index < carFleets.length; index++) {
            stack.push(carFleets[index]);
           if (stack.length >= 2 && stack[stack.length - 2].arriveAt >= stack[stack.length - 1].arriveAt) {
            stack.pop();
           } 

        }

        return stack.length;
    }
}
