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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let nodes = k;
        let result = undefined;
        const helper = (node) => {
            if (!node) {
                return;
            }

            if (node.left) {
                helper(node.left);
            }

            if (nodes === 1) {
                result = node.val;
            }
            nodes--;

            if (node.right) {
                helper(node.right);
            }
        };
        helper(root);
        return result;

    }
}
