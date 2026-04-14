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
            
    	    let goodCount = 0;
            if (node.val >= max) {
                goodCount = 1;
            }

            max = Math.max(max, node.val);
            const left = helper(node.left, max);
            const right = helper(node.right, max);

            goodCount += left;
            goodCount += right;

            return goodCount;
        };

        return helper(root, Number.NEGATIVE_INFINITY);
    }
}
