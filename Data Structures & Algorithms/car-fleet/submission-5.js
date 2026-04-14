class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((car, index) => ({reached: (target - position[index]) / speed[index], position: position[index], speed: speed[index], }));
        cars = cars.sort((a,b) => b.position - a.position); // farthest car on index 0

        const stack = [];
        let carFleets = cars.length;
        for (let index = 0; index < cars.length; index++) {
            stack.push(cars[index]);
            if (stack.length >=2 && stack[stack.length - 2].reached >= stack[stack.length - 1].reached) {
                carFleets--;
                stack.pop();
            }
            
        }

        return carFleets;
    }
}

/*      P S R
    0: {4,2,3 }
    1: {3,1,3}
*/
