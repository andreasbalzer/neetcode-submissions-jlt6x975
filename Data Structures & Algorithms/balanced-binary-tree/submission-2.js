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
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true;
        const helper = (node) => {
            if (!node || !balanced) {
                return 0;
            }

            const left = helper(node.left);
            const right = helper(node.right);
            if (Math.abs(left - right) > 1) {
                balanced = false;
                return 0;
            }

            return Math.max(left, right) + 1;
        };

        helper(root);
        return balanced;
    }
}
