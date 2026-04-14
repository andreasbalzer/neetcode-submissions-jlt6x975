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
/*
pre [1,2,3,4]
in  [2,1,3,4]

*/
        if (!preorder.length || !inorder.length) {
            return null;
        }

        const node = new TreeNode(preorder[0]);
        node.left = this.buildTree(preorder.slice(1), inorder.slice(0, inorder.indexOf(preorder[0])));
        node.right = this.buildTree(preorder.slice(inorder.indexOf(preorder[0]) + 1), inorder.slice(inorder.indexOf(preorder[0]) + 1));

        return node;

    }
}
