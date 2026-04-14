class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((car, index) => ({ position: position[index], speed: speed[index], destination: (target-position[index])/speed[index] }));
        cars.sort((a, b) => a.position - b.position);
        console.log(cars);

        let carFleets = cars.length;
        for (let carIndex = cars.length - 2; carIndex >= 0; carIndex--) {
            console.log(`Compare carIndex ${carIndex} pos ${cars[carIndex].position} speed ${cars[carIndex].speed} destination ${cars[carIndex].destination} with ${cars[carIndex + 1].destination}`)
            if (cars[carIndex].destination <= cars[carIndex + 1].destination) {
                console.log(`is faster`);
                cars[carIndex].destination = cars[carIndex + 1].destination;
                carFleets--;
            }
        }        
        return carFleets;
    }
}
