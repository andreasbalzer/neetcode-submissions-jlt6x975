class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];
        for (let index = 0; index < temperatures.length; index++) {
            while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[index]) {
                const oldIndex = stack.pop();
                result[oldIndex] = index - oldIndex;
            }
            stack.push(index);
        }
        

        return result;
    }
}
