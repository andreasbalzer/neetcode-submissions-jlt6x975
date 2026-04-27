class Heap {
    constructor(nums = undefined) {
        this.data = [null];
        this.size = 0;

        if (nums) {
            nums.forEach((num) => this.enqueue(num));
        }
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

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new Heap(stones.map((stone) => -1 * stone));
        while (heap.size > 0) {
            if (heap.size === 1) {
                return heap.dequeue() * -1;
            }

            let stone1 = heap.dequeue() * (-1);
            let stone2 = heap.dequeue() * (-1);
            if (stone1 > stone2) {
                stone1 = stone1 - stone2;
                heap.enqueue(stone1 * (-1));
            } else if (stone1 < stone2) {
                stone2 = stone2 - stone1;
                heap.enqueue(stone2 * (-1));
            }
        }

        return 0;
    }
}
