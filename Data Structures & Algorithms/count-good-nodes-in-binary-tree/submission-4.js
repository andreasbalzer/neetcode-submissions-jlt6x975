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

            const isGoodNode = node.val >= max ? 1 : 0;
            max = Math.max(max, node.val);
            return helper(node.left, max) + helper(node.right, max) + isGoodNode;
        };
        return helper(root, Number.NEGATIVE_INFINITY);
    }
}
