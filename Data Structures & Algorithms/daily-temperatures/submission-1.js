class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = (new Array(temperatures.length)).fill(0);
        for (let index = 0; index < temperatures.length; index++) {
            while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[index]) {
                result[stack[stack.length - 1]] = index - stack.pop();
            }
            stack.push(index);
        }

        return result;
    }
}
