class Node {
    constructor(key, val = 0, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.most = new Node();
        this.least = new Node();
        this.most.next = this.least;
        this.least.prev = this.most;
        this.capacity = capacity;
        this.storage = new Map();
        // {most} {} {} {least}
    }

    update(node) {
        console.log("update");
        console.log(node);
        const before = node.prev;
            const after = node.next;

            console.log("a");
            // remove node from scale
            before.next = after;
            after.prev = before;

            console.log("b");
            // add node to scale
            node.prev = this.most;
            node.next = this.most.next;
            console.log("c");
            this.most.next = node;
            node.next.prev = node;
            console.log("d");
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        console.log("get " + key);
        if (this.storage.has(key)) {

            const node = this.storage.get(key);
            this.update(node);
            return this.storage.get(key).val;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.storage.has(key)) {
            this.storage.get(key).val = value;
            this.update(this.storage.get(key));
            return;
        }
        
        console.log("put " + key);
        const newNode = new Node(key, value);
        
        newNode.next = this.most.next;
        newNode.prev = this.most.next.prev;
        this.most.next = newNode;
        newNode.next.prev = newNode;

        this.storage.set(key, newNode);
        this.capacity--;
        if (this.capacity < 0) {
            this.storage.delete(this.least.prev.key);
            this.least.prev.prev.next = this.least;
            this.least.prev = this.least.prev.prev;
        }

    }

    
}
