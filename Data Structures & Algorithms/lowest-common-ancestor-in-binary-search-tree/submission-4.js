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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let node = root;
        while (node) {
            if (node.val >= p.val && node.val <= q.val ||
                node.val <= p.val && node.val >= q.val) {
                return node;
            }
            if (node.val > p.val && node.val > q.val) {
                node = node.left;
            }
            else if (node.val < p.val && node.val < q.val) {
                node = node.right;
            }
        }

        return null;
    }
}
