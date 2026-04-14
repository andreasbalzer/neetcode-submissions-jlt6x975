class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let token of tokens) {
            if (token === "+") {
                stack.push(stack.pop() + stack.pop());
            }
            else if (token === "-") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a - b);
            }
            else if (token === "*") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a * b);
            }
            else if (token === "/") {
                const b = stack.pop();
                const a = stack.pop();
                const res = a / b;
                stack.push(res < 0 ? Math.ceil(res) : Math.floor(res));
            }
            else {
                stack.push(parseInt(token, 10));
            }
        }

        return stack[0];
    }
}
