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
    diameterOfBinaryTree(root) {
        const helper = (node) => {

            if (!node) {
                return {goesUp: 0, inChildren: 0};
            }

            const left = helper(node.left);
            const right = helper(node.right);
            
            const result = {
                goesUp: Math.max.apply(null, [
                    node.left ? (1 + left.goesUp) : 0,
                    node.right ? (1 + right.goesUp) : 0
                ]),
                inChildren: Math.max.apply(null, [
                    (node.left ? (1 + left.goesUp) : 0) +
                        (node.right ? (1 + right.goesUp) : 0),
                    left.inChildren,
                    right.inChildren
                ]),
            };

            console.log(`val ${node.val} goesUp ${result.goesUp}, inChildren ${result.inChildren}`);
            return result;
        };

        const result = helper(root);
        return Math.max(result.goesUp, result.inChildren);
    }
}
