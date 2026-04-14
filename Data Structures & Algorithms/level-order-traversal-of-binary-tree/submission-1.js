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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return [];
        }

        const result = [];
        const queue = [];
        queue.push(root);
        while (queue.length) {
            let level = [];
            const length = queue.length;
            for (let index = 0; index < length; index++) {
                const current = queue.shift();
                if (current !== null) {
                    level.push(current.val);
                    queue.push(current.left);
                    queue.push(current.right);
                }
            }

            if (level.length) {
                result.push(level);
            }
        }

        return result;
    }
}
