class Node {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
        this.word = undefined;
        this.key = undefined;
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
            node = node.children.get(char);
            node.key = char;
        }

        node.endOfWord = true;
        node.word = word;
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

        const result = [];
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

            if (nodeWithChar.endOfWord) {
                result.push(nodeWithChar.word);
            }

            visited.add(`${row}-${column}`);
            dfs(row + 1, column, nodeWithChar);
            dfs(row - 1, column, nodeWithChar);
            dfs(row, column + 1, nodeWithChar);
            dfs(row, column - 1, nodeWithChar);
            visited.delete(`${row}-${column}`);
        };

        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board[0].length; column++) {
                dfs(row, column, tree);
            }
        }

        return Array.from(new Set(result).values());
    }
}
