class Node {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.tree = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.tree;
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new Node());
            }
            node = node.children.get(char);
        }

        node.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const helper = (index, node) => {
            if (!node) {
                return false;
            }

            if (index === word.length) {
                return node.endOfWord;
            }

            if (word[index] === ".") {
                let sub = false;
                for (let value of node.children.values()) {
                    sub = sub || helper(index + 1, value);
                }
                return sub;
            }

            if (!node.children.has(word[index])) {
                return false;
            }

            return helper(index + 1, node.children.get(word[index]));
        };
        return helper(0, this.tree);
    }
}
