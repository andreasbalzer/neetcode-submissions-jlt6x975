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
        let preorder = [];
        const dfs = (node) => {
            if(!node) {
                preorder.push("");
                return;
            }
            preorder.push(node.val);
            dfs(node.left);
            dfs(node.right);
        };

        dfs(root);
        return preorder.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        console.log(data);
        const parsed = data.split(",");
        let index = 0;
        const dfs = () => {
            const item = parsed[index++];
            
            if (item === "") {
                return null;
            }

            const node = new TreeNode();
            node.val = parseInt(item, 10);
            node.left = dfs();
            node.right = dfs();

            return node;
        };
        return dfs();
    }
}
