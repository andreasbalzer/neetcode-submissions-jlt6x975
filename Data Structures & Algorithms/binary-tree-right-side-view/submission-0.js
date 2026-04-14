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
     * @return {number[]}
     */
    rightSideView(root) {
        const result = [];
        const queue = [];
        queue.push(root);
        while (queue.length) {
            const length = queue.length;
            let lastValue = null;
            for (let index = 0; index < length; index++) {
                const current = queue.shift();
                if (current != null) {
                    lastValue = current.val;
                    queue.push(current.left);
                    queue.push(current.right);
                }
            }

            if (lastValue !== null) {
                result.push(lastValue);
            }
        }

        return result;
    }
}
