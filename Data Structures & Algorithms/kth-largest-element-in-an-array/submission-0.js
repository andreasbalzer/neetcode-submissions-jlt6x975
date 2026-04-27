class Heap {
    constructor() {
        this.data = [null];
        this.size = 0;
    }

    enqueue(value) {
        this.data.push(value);
        this.size++;
        let index = this.data.length - 1;
        while (index > 1) {
            let parent = Math.floor(index/2);
            if (this.data[index] >= this.data[parent]) {
                return;
            }

            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
            index = parent;
        }
    }

    dequeue() {
        if (this.size === 0) {
            return undefined;
        }

        const value = this.data[1];
        this.data[1] = this.data.pop();
        this.size--;

        let index = 1;
        
        
        while (true) {
            let smaller = index;
            let left = 2 * smaller;
            let right = 2 * smaller + 1;

            if (left < this.data.length && this.data[smaller] > this.data[left]) {
                smaller = left;
            }
            if (right < this.data.length && this.data[smaller] > this.data[right]) {
                smaller = right;
            }

            if (smaller === index) {
                break;
            }

            [this.data[index], this.data[smaller]] = [this.data[smaller], this.data[index]];
            index = smaller;
        }

        return value;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new Heap();
        for (let index = 0; index < nums.length; index++) {
            heap.enqueue(nums[index]);
            if (heap.size > k) {
                heap.dequeue();
            }
        }

        console.log(heap.data);


        return heap.dequeue();
    }
}
