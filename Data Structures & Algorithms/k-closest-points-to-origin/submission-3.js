class Heap {
    constructor(accessor) {
        this.data = [null];
        this.size = 0;
        this.accessor = accessor;
    }

    enqueue(value) {
        this.size++;
        this.data.push(value);
        let index = this.data.length - 1;
        let parent = Math.floor(index/2);
        while (parent > 0 && this.accessor(this.data[index]) < this.accessor(this.data[parent])) {
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

            if (left <= this.size && this.accessor(this.data[left]) < this.accessor(this.data[smallest])) {
                smallest = left;
            }

            if (right <= this.size && this.accessor(this.data[right]) < this.accessor(this.data[smallest])) {
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
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new Heap((item) => item.distance);
        points.forEach((point) => heap.enqueue({point, distance: Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2)) }));
        console.log(heap.data);
        const result = [];
        while (k > 0) {
            result.push(heap.dequeue().point);
            k--;
        }

        return result;
    }
}
