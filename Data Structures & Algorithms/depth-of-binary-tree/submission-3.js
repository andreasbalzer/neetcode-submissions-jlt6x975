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
    maxDepth(root) {
        if (!root) {
            return 0;
        }

        const stack = [[root, 1]];
        let maxHeight = 1;
        while (stack.length) {
            const [{left, right}, height] = stack.pop();
            maxHeight = Math.max(maxHeight, height);
            if (left) {
                stack.push([left, height + 1]);
            }
            if (right) {
                stack.push([right, height + 1]);
            }
        }

        return maxHeight;
    }
}
