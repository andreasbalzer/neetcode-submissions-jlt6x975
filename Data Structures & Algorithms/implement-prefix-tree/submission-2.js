class Node {
    constructor() {
        this.map = new Map();
        this.final = false;
    }
}

class PrefixTree {
    constructor() {
        this.tree = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.tree;
        for (let index = 0; index < word.length; index++) {
            if (!node.map.has(word[index])) {
                const newNode = new Node();
                node.map.set(word[index], newNode);
            }
            node = node.map.get(word[index]);
        }
        node.final = true;
    }

    internalSearch(word) {
        let node = this.tree;
        for (let index = 0; index < word.length; index++) {
            if (!node.map.has(word[index])) {
                return undefined;
            }
            node = node.map.get(word[index]);
        }

        return node;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.internalSearch(word)?.final ?? false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return !!this.internalSearch(prefix);
    }
}
