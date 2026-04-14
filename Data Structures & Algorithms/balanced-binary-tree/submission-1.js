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
        let result = true;
        const helper = (node) => {
            if (!node) {
                return 0;
            }

            const left = helper(node.left);
            const right = helper(node.right);

            if (Math.abs(right - left) > 1) {
                result = false;
            }

            return 1 + Math.max(left, right);

        };

        helper(root);
        return result;


    }
}
