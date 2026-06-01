class Node {
    constructor(isWord = false, char) {
        this.children = new Array(26).fill(undefined);
        this.isWord = isWord;
        this.char = char;
    }

    getNode(char) {
        return this.children[char.charCodeAt(0) - "a".charCodeAt(0)];
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(value) {
        let node = this.root;
        for (let char of value) {
            
            if (!node.children[char.charCodeAt(0) - "a".charCodeAt(0)]) {
                const newNode = new Node(false, char);
                node.children[char.charCodeAt(0) - "a".charCodeAt(0)] = newNode;
            }
            
            node = node.children[char.charCodeAt(0) - "a".charCodeAt(0)];
        }

        node.isWord = true;
    }
}
class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const tree = new Trie();
        for (let word of wordDict) {
            tree.insert(word);
        }

        const memory = new Map();
        const dfs = (index, node) => {
            if (!memory.has(node)) {
                memory.set(node, new Map());
            }
            if (index === s.length) { 
                return node.isWord;
            }
            

            if (memory.get(node).has(index)) {
                return memory.get(node).get(index);
            }

            const char = s[index];
            node = node.getNode(char);
            if (!node) {
                return false;
            }


            let result = dfs(index + 1, node);
            result = result || node.isWord && dfs(index + 1, tree.root);

            memory.get(node).set(index, result);

            return result;

        };

        return dfs(0, tree.root);
    }
}
