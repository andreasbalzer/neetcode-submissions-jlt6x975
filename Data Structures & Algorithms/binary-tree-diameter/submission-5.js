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
        /**
         * Returns diameter of tree
         * @returns [passableToRoot, contained by node]
         */
        const helper = (node) => {
            if (!node) {
                return [-1, -1];
            }

            console.log(`Node ${node.val}`);


            const left = helper(node.left);
            const right = helper(node.right);

            const passableToRoot = Math.max(left[0], right[0]) + 1;
            const contained = Math.max.apply(null,
                [
                    left[0] + 1,
                    left[1],
                    right[0] + 1,
                    right[1],
                    left[0] + right[0] + 2
                ]);
            console.log(`Results for ${node.val}:`);
            console.log(left);
            console.log(right);
            console.log(passableToRoot);
            console.log(contained);

            return [passableToRoot, contained];
        };

        return Math.max.apply(null, helper(root));
    }
}
