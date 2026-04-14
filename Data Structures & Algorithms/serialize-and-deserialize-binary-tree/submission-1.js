/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const preorder = [];
        const dfs = (node) => {
            if (!node) {
                preorder.push(null);
                return;
            }
            preorder.push(node.val);
            dfs(node.left);
            dfs(node.right);
        };
        dfs(root);
        console.log(preorder);
        return preorder;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let index = 0;
        const helper = () => {
            const value = data[index++];
            let root = value === null ? null : new TreeNode(value);
            if (root !== null) {
                root.left = helper();
                root.right = helper();
            }

            return root;
        }
        return helper();
    }
}
