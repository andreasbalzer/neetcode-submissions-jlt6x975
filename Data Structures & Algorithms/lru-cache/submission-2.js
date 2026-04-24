
class Node {
    constructor(key, value = undefined, next = undefined, prev = undefined) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        // [most....least]
        this.most = new Node(undefined, undefined);
        this.least = new Node(undefined, undefined);
        this.most.next = this.least;
        this.least.prev = this.most;
        this.capacity = capacity;
        this.size = 0;
        this.map = new Map();
    }

    makeMostRecent (changedNode) {
        // extract changedNode
        const previous = changedNode.prev;
        const next = changedNode.next;
        previous.next = next;
        next.prev = previous;

        //put in changedNode 
        changedNode.next = this.most.next;
        changedNode.prev = this.most;
        changedNode.next.prev = changedNode;
        this.most.next = changedNode;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) {
            console.log(`Get key ${key} not found`);
            return -1;
        }

        console.log(`Get key ${key} found`);
        const node = this.map.get(key);
        this.makeMostRecent(node);
        console.log(`response ${node.value}`);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            console.log(`Put key ${key} found`)
            const changedNode = this.map.get(key);
            changedNode.value = value;

            this.makeMostRecent(changedNode);
        }
        else {
            console.log(`Put key ${key} not found`);
            const newNode = new Node(key, value, this.most.next, this.most);
            this.map.set(key, newNode);
            this.most.next = newNode;
            newNode.next.prev = newNode;
            this.log();

            this.size++;
            if (this.size > this.capacity) {
                this.size--;
                const newOldNode = this.least.prev.prev;
                console.log(`delete key ${this.least.prev.key}`);
                this.map.delete(this.least.prev.key);
                this.least.prev = newOldNode;
                this.least.prev.next = this.least;
            }
            this.log();
        }
    }

    log() {
        let node = this.most;
        let output = "";
        while (node) {
            output += node.key + ": " + node.value + ", ";
            node = node.next;
        }

        console.log(output);
    }
}
