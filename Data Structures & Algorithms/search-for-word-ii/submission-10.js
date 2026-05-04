class Node {
    constructor() {
        this.children = new Map();
        this.word = undefined;
        this.key = undefined;
        this.refs = 0;
        this.parent = undefined;
    }

    get(char) {
        return this.children.get(char);
    }
}
class Tree {
    constructor() {
        this.tree = new Node();
    }

    insert(word) {
        let node = this.tree;
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new Node());
            }
            node.refs++;
            let childNode = node.children.get(char);
            childNode.key = char;
            childNode.parent = node;
            node = childNode;
        }

        node.word = word;
        node.refs++;
    }

    get(char) {
        return this.tree.children.get(char);
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const tree = new Tree();
        for (let word of words) {
            tree.insert(word);
        }

        let visited = new Set();
        const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

        const result = new Set();
        const dfs = (row, column, node) => {
            if (row < 0 || row >= board.length ||
                column < 0 || column >= board[0].length ||
                !node ||
                visited.has(`${row}-${column}`)) {
                return;
            }
            const nodeWithChar = node.get(board[row][column]);
            if (!nodeWithChar) {
                return;
            }

            if (nodeWithChar.word) {
                result.add(nodeWithChar.word);
                let pruneNode = nodeWithChar;
                
                while (pruneNode) {
                    pruneNode.refs--;
                    if (pruneNode.refs === 0 && pruneNode.parent) {
                        pruneNode.parent.children.delete(pruneNode.key);
                    }
                    pruneNode = pruneNode.parent;
                }
            }

            visited.add(`${row}-${column}`);
            dirs.forEach((dir) => dfs(row + dir[0], column + dir[1], nodeWithChar));
            visited.delete(`${row}-${column}`);
        };

        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board[0].length; column++) {
                dfs(row, column, tree);
            }
        }

        return Array.from(result);
    }
}
