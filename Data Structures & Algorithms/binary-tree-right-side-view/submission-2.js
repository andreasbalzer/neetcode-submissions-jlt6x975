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
        const queue = [root];
        const result = [];
        while (queue.length) {
            const length = queue.length;
            let value = undefined;
            for (let index = 0; index < length; index++) {
                const item = queue.shift();
                if (item) {
                    value = item.val;
                    queue.push(item.left);
                    queue.push(item.right);
                }
            }
            if (value) {
                result.push(value);
            }
        }

        return result;
    }
}
