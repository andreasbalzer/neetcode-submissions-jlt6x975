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
        let result = null;
        const helper = (node) => {
            console.log(`node ${node?.val} k ${k}`);
            if (!node || k < 1) {
                console.log(`return`);
                return;
            } 

            helper(node.left);
            if (k === 1) {
                console.log(`assign ${node.val}`);
                result = node.val;
                k--;
                return;
            }
            k--;
            helper(node.right);
        };
        helper(root);
        return result;
    }
}
