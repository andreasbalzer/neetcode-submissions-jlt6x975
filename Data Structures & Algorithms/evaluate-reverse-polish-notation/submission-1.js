class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let token of tokens) {
            switch (token) {
                case "+": {
                    const operand2 = stack.pop();
                    const operand1 = stack.pop();
                    stack.push(operand1 + operand2);
                    break;
                }
                case "*": {
                    const operand2 = stack.pop();
                    const operand1 = stack.pop();
                    stack.push(operand1 * operand2);
                    break;
                }
                case "-": {
                    const operand2 = stack.pop();
                    const operand1 = stack.pop();
                    stack.push(operand1 - operand2);
                    break;
                }
                case "/": {
                    const operand2 = stack.pop();
                    const operand1 = stack.pop();
                    let division = operand1 / operand2;
                    if (division > 0) {
                        division = Math.floor(division);
                    }
                    else {
                        division = Math.ceil(division);
                    }
                    stack.push(division);
                    break;
                }
                default: {
                    stack.push(parseInt(token, 10));
                    break;
                }
            }
        }

        return stack[0];
    }
}
