/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) {
            return null;
        }

        while (lists.length > 1) {
            const mergedLists = [];
            for (let index = 0; index < lists.length; index += 2) {
                const list1 = lists[index];
                const list2 = index + 1 < lists.length ? lists[index + 1] : null;
                mergedLists.push(this.merge(list1, list2));
            }
            lists = mergedLists;
        }
        return lists[0];
    }

    merge(list1, list2) {
        const newHead = new ListNode();
        let node = newHead;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                node.next = list1;
                list1 = list1.next;
            }
            else {
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next;
        }
        if (list1) {
            node.next = list1;
        }
        if (list2) {
            node.next = list2;
        }


        return newHead.next;
    }
}
