class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        /*
[30,38,30,36,35,40,28]

[1,4,1,2,1,0,0]
*/
        const deque = []; // [value, index]
        const result = new Array(temperatures.length).fill(0);
        for (let index = 0; index < temperatures.length; index++) {
            while (deque.length && deque[deque.length - 1][0] < temperatures[index]) {
                const item = deque.pop();
                result[item[1]] = index - item[1];
            }
            deque.push([temperatures[index], index]);
        }

        return result;
    }
}
