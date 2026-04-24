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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const stack = [[p, q]];
        while (stack.length) {
            const item = stack.pop();
            if (item[0] && !item[1] || !item[0] && item[1] || item[0] && item[1] && item[0].val !== item[1].val) {
                return false;
            }

            if (item[0] && item[1]) {
                stack.push([item[0].left, item[1].left]);
                stack.push([item[0].right, item[1].right]);
            }
        }
        return true;
    }
}