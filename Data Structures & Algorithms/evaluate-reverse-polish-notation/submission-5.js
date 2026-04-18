class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let char of tokens) {
            switch (char) {
                case "+" :
                    { 
                        const b = stack.pop();
                        const a = stack.pop();
                        stack.push(a + b);
                        break;
                    }
                case "-" : { 
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a - b);
                    break;
                }
                case "*" : { 
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a * b);
                    break;
                }
                case "/" : { 
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(Math.trunc(a / b));
                    break;
                }
                default:
                    stack.push(parseInt(char, 10));
                    break;
            }
        }

        return stack[0];
    }
}
