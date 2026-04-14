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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root || !subRoot) {
            return false;
        }

        if (this.isMatch(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);

    }

    isMatch(root, subRoot) { 
        if (!root && !subRoot) {
            return true;
        }
        if ((!root && subRoot) || (root && !subRoot)) {
            return false;
        }

        return root.val === subRoot.val && this.isMatch(root.left, subRoot.left) && this.isMatch(root.right, subRoot.right);    
    }
}
