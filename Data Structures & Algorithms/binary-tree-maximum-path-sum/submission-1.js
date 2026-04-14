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
    maxPathSum(root) {
        const helper = (node) => {
            if (!node) {
                return [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
            }

            const left = helper(node.left);
            const right = helper(node.right);

            return [
                Math.max.apply(null, [
                    node.val,
                    node.val + left[0],
                    node.val + right[0]
                ]),
                Math.max.apply(null, [
                    node.val,
                    left[1],
                    left[0],
                    right[1],
                    right[0],
                    node.val + left[0],
                    node.val + right[0],
                    node.val + left[0] + right[0]
                ])
            ];
        };

        return Math.max.apply(null, helper(root));
    }
}
