class Heap {
    constructor(nums = undefined) {
        this.data = [null];
        this.size = 0;

        if (nums) {
            nums.forEach((num) => this.enqueue(num));
        }
        console.log("Heap:");
        console.log(this.data);
    }

    enqueue(value) {
        this.size++;
        this.data.push(value);
        let index = this.data.length - 1;
        let parent = Math.floor(index/2);
        while (parent > 0 && this.data[index] < this.data[parent]) {
            const tmp = this.data[index];
            this.data[index] = this.data[parent];
            this.data[parent] = tmp;
            index = parent;
            parent = Math.floor(index / 2);
        }
    }

    dequeue() {
        if (this.size === 0) { return undefined; }
        const result = this.data[1];
        this.size--;
        this.data[1] = this.data.pop();
        let index = 1;
        let childLeft = 2 * index;
        while (true) {
            let left = index * 2;
            let right = index * 2 + 1;
            let smallest = index;

            if (left <= this.size && this.data[left] < this.data[smallest]) {
                smallest = left;
            }

            if (right <= this.size && this.data[right] < this.data[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;

            // swap
            [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];
            index = smallest;
        }

        return result;
    }

    front() {
        return this.size > 0 ? this.data[1] : undefined;
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new Heap(nums);
        this.k = k;


        while (this.heap.size > k) {
            this.heap.dequeue();
        }

        console.log("After removal:");
        console.log(this.heap);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.enqueue(val);
        if (this.heap.size > this.k) {
            this.heap.dequeue();
        }
        return this.heap.front();
    }
}
