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

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        /**
         * preorder [1,2,3,4]
         * inorder  [2,1,3,4]
         */
        const storage = new Map();
        inorder.forEach((item, index) => storage.set(item, index));
        let preorderIndex = 0;
        const dfs = (left, right) => {
            if (left > right) {
                return null;
            }

            const rootVal = preorder[preorderIndex++];
            const newNode = new TreeNode(rootVal)
            const mid = storage.get(rootVal);
            newNode.left = dfs(left, mid - 1);
            newNode.right = dfs(mid + 1, right);
            return newNode;
        };

        return dfs(0, inorder.length - 1); 
    }
}
