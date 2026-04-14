class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        /*

    	| |
        | |
        | |  |
        | |  |
        | |  |
        | ||||
        ||||||
      i 012345
      h 717224

        store each height in stack
        for each height store current index, current height, height of previous element
        keep track of max Area
        */
        const stack = [];
        let maxArea = 0;
        for (let index = 0; index < heights.length; index++) {
            let start = index;
            while (stack.length && stack[stack.length - 1].height > heights[index]) {
                const item = stack.pop();
                maxArea = Math.max(maxArea, item.height * (index - item.start));
                start = item.start;
            }

            stack.push({
                height: heights[index],
                start: start,
            });
        }

        for (let index = 0; index < stack.length; index++) {
            maxArea = Math.max(maxArea, stack[index].height * (heights.length - stack[index].start));
        }

        return maxArea;
    }
}
