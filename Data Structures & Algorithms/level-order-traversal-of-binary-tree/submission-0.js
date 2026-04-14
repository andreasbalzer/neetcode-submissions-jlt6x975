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

        let level = 0;
        const result = [];
        const queue = [];
        queue.push(root);
        while (queue.length) {
            result[level] = [];
            const length = queue.length;
            for (let index = 0; index < length; index++) {
                const current = queue.shift();
                result[level].push(current.val);

                if (current.left) {
                    queue.push(current.left);
                }
                if (current.right) {
                    queue.push(current.right);
                }
            }

            level++;
        }

        return result;
    }
}
