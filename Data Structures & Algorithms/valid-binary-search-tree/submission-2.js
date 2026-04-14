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
    isValidBST(root) {
        const helper = (node, min, max) => {
            if (!node) {
                return true;
            }

            if (node.val <= min || node.val >= max) {
                return false;
            }

            return helper(node.left, min, node.val) &&
                helper(node.right, node.val, max);
        };

        return helper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }
}
