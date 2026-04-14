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
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        /*
                1
                   2
                 3  4
              5


        */
        const helper = (root) => {
            if (!root) {
                return [0, 0]; // through root, not through root
            }

            const left = helper(root.left);
            const right = helper(root.right);

            const notUp = Math.max.call(null, (root.left ? left[0] + 1 : 0) + (root.right ? right[0] + 1 : 0), left[1], right[1]);
            const up = Math.max((root.left ? left[0] + 1 : 0), (root.right ? right[0] + 1 : 0));
            return [up, notUp];
        };

        return Math.max.apply(null, helper(root));
    }
}
