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
        /*
            3
        3
      4   2

        */
        const helper = (node, max) => {
            if (!node) {
                return 0;
            }
            
    	    let goodCount = node.val >= max ? 1 : 0;
            max = Math.max(max, node.val);
            goodCount += helper(node.left, max);
            goodCount += helper(node.right, max);

            return goodCount;
        };

        return helper(root, Number.NEGATIVE_INFINITY);
    }
}
