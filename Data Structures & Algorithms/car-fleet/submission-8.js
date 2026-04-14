class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        /*
        calc arrivalTime per car
        sort cars by position pos 0 is first (ascending sort)
        put car 0 onto stack
        put car 1 onto stack
        if carfleet 0 arrives after or at carfleet 1, then combine (decrement car fleeets, initially n)

        runtime linear n
        space? n
        */
        const cars = new Array(position.length);
        for (let index = 0; index < position.length; index++) {
            cars[index] = {
                position: position[index],
                speed: speed[index],
                arrivalTime: (target - position[index]) / speed[index],
            };
        }
        
        cars.sort((a, b) => b.position - a.position);

        const stack = [];
        let carFleets = cars.length;

        for (let index = 0; index < cars.length; index++) {
            stack.push(cars[index]);
            if (stack.length >= 2 && stack[stack.length - 2].arrivalTime >= stack[stack.length - 1].arrivalTime) {
                stack.pop();
                carFleets--;
            }
        }

        return carFleets;
    }
}
