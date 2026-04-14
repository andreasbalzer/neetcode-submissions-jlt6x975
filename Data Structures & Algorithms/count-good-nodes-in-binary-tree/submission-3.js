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
    goodNodes(root) {
        const helper = (node, max) => {
            if (!node) {
                return 0;
            }

            let goodNodes = 0;
            if (max <= node.val) {
                goodNodes = 1;
            }

            const newMax = Math.max(max, node.val);
            goodNodes += helper(node.left, newMax);
            goodNodes += helper(node.right, newMax);

            return goodNodes;
        };

        return helper(root, Number.NEGATIVE_INFINITY);
    }
}
