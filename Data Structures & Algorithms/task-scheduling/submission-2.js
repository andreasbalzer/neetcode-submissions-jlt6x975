class Heap {
    constructor(accessor) {
        this.data = [null];
        this.size = 0;
        this.accessor = accessor;
    }

    enqueue(value) {
        this.data.push(value);
        this.size++;
        let index = this.data.length - 1;
        while (index > 1) {
            let parent = Math.floor(index/2);
            if (this.accessor(this.data[index]) >= this.accessor(this.data[parent])) {
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

        if (this.size === 1) {
            this.data.pop();
            this.size = 0;
            return value;
        }

        this.data[1] = this.data.pop();
        this.size--;

        let index = 1;        
        while (true) {
            let smaller = index;
            let left = 2 * smaller;
            let right = 2 * smaller + 1;

            if (left < this.data.length && this.accessor(this.data[smaller]) > this.accessor(this.data[left])) {
                smaller = left;
            }
            if (right < this.data.length && this.accessor(this.data[smaller]) > this.accessor(this.data[right])) {
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
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const waitQueue = [];
        const readyHeap = new Heap((item) => item[1]);
        const map = new Map();
        for (let task of tasks) {
            map.set(task, (map.get(task) || 0) + 1);
        }
        for (let key of map.keys()) {
            readyHeap.enqueue([key, map.get(key) * -1]);
        }
        let time = 0;
        while (readyHeap.size || waitQueue.length) {
            /*console.log("loop");
            console.log("readyHeap:");
            console.log(readyHeap.data);
            console.log("wait heap data:");
            console.log(waitHeap.data);*/
            while (waitQueue.length && waitQueue[0][2] <= time) {
                const readyTask = waitQueue.shift();
                //console.log(`Putting ${readyTask[0]}/${readyTask[1]} back into readyHeap.`)
                readyHeap.enqueue([readyTask[0], readyTask[1] * -1 ]);
            }

            if (readyHeap.size) {
                const item = readyHeap.dequeue();
                if (item[1]*-1 > 1) {
                    //console.log(`Putting ${item[0]} into waitHeap to rerun at ${time + n + 1}`);
                    waitQueue.push([item[0], item[1]*-1 - 1, time + n + 1]);
                }
            }
            time += 1;
        }

        return time;
    }
}
