class Heap {
    constructor(accessor) {
        this.data = [];
        this.accessor = accessor;
        this.size = 0;
    }

    enqueue(value) {
        this.data.push(value);
        this.size++;
    }
    
    dequeue() {
        if (this.data.length === 0) {
            return undefined;
        }
        this.size--;
        this.data.sort((a, b) => this.accessor(a) - this.accessor(b));
        return this.data.shift();
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const heap = new Heap((item) => item[2]);
        const visit = new Set();
        heap.enqueue([0, 0, grid[0][0]]);
        let result = 0;
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        while (heap.size) {
            const [y, x, height] = heap.dequeue();
            console.log(`dequeued ${y} / ${x} / ${height}`);
            result = Math.max(result, height);
            if (y === grid.length - 1 && x === grid[0].length - 1) {
                return result;
            }
            dirs.forEach((dir) => {
                const newY = y + dir[0];
                const newX = x + dir[1];
                if (newY >= 0 &&
                    newY < grid.length && 
                    newX >= 0 &&
                    newX < grid[0].length && 
                    !visit.has(newY + "/" + newX)) {
                    heap.enqueue([newY, newX, grid[newY][newX]]);
                    visit.add(`${newY}/${newX}`);
                }
            });
        }

        return result;
    }
}
