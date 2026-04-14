class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push([val, Math.min(val, this.stack.length ? this.stack[this.stack.length - 1][1] : val)]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
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
        console.log(`getMin ${this.stack.length} ${this.stack}`);
        return this.stack[this.stack.length - 1][1];
    }
}
