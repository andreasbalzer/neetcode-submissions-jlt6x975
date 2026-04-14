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
        let result = undefined;
        const helper = (node) => {
            if (!node || k < 1) {
                return;
            }

            helper(node.left);
            if (k == 1) {
                result = node.val;
                k--;
            }
            k--;    
            helper(node.right);
            
            
        };

        helper(root);

        return result;
    }
}
