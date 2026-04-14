class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const deque = [];
        const result = new Array(temperatures.length).fill(0);
        for (let index = 0; index < temperatures.length; index++) {
            while (deque.length > 0 && temperatures[deque[deque.length - 1]] < temperatures[index]) {
                const stackIndex = deque.pop();
                result[stackIndex] = (index - stackIndex);
            }
            deque.push(index);
        }

        return result;
    }
}
