class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push([val, Math.min((this.stack.length > 0 ? this.stack[this.stack.length - 1][1] : val), val)]);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()[0];
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1];
    }
}
