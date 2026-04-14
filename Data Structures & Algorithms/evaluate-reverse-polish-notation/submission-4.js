class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let index = 0; index < tokens.length; index++) {
            if (tokens[index] === "+") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a + b);
            } else if (tokens[index] === "-") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a - b);
            } else if (tokens[index] === "*") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a * b);
            } else if (tokens[index] === "/") {
                const b = stack.pop();
                const a = stack.pop();
                let result = a / b;
                if (result < 0) {
                    result = Math.ceil(result);
                }
                else {
                    result = Math.floor(result);
                }
                stack.push(result);
            } else {
                stack.push(parseInt(tokens[index], 10));
            }
        }

        return stack[0];
    }
}
