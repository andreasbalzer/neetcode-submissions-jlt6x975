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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0) {
            return null;
        }

        const newNode = new TreeNode(preorder[0]);
        // preorder [1,2,3,4]
        // inorder  [2,1,3,4]
        const mid = inorder.indexOf(preorder[0]);
        newNode.left = this.buildTree(
            preorder.slice(1, mid + 1),
            inorder.slice(0, mid)
        );
        newNode.right = this.buildTree(
            preorder.slice(mid + 1),
            inorder.slice(mid + 1)
        );
        return newNode;
    }
}
