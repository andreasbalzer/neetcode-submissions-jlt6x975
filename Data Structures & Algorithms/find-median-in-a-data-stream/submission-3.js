class Heap {
    constructor() {
        this.data = [];
        this.size = 0;
    }

    enqueue(value) {
        this.data.push(value);
        this.size++;
    }

    dequeue() {
        this.data.sort((a, b) => a - b);
        this.size--;
        return this.data.shift();
    }

    front() {
        this.data.sort((a,b) => a-b);
        return this.data[0];
    }
}
class MedianFinder {
    constructor() {
        this.min = new Heap();
        this.max = new Heap();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (!this.min.size || num > this.min.front()) {
            this.min.enqueue(num);
        }
        else {
            this.max.enqueue(num*-1);
        }
        
        if (this.max.size > this.min.size + 1) {
            this.min.enqueue(this.max.dequeue() * -1);
        }
        else if (this.min.size > this.max.size + 1) {
            this.max.enqueue(this.min.dequeue() * -1);
        }
        
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.max.size > this.min.size) {
            return this.max.front() * -1;
        }
        if (this.min.size > this.max.size) {
            return this.min.front();
        }
        return (this.min.front() + this.max.front() * -1) / 2;
    }
}
