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
        const queue = [root];
        const levels = [];
        while (queue.length) {
            const length = queue.length;
            const level = [];
            for (let index = 0; index < length; index++) {
                const item = queue.shift();
                if (item) {
                    level.push(item.val);
                    queue.push(item.left);
                    queue.push(item.right);
                }
            }
            if (level.length) {
                levels.push(level);
            }
        }
        return levels;
    }
}
