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
        if (!lists || !lists.length) {
            return null;
        }

        while (lists.length > 1) {
            const newLists = [];
            for (let index = 0; index < lists.length; index += 2) {
                console.log(`index ${index}`);
                newLists.push(this.merge(lists[index], index + 1 < lists.length ? lists[index + 1] : null));
            }

            lists = newLists;
        }

        console.log("return " + lists[0]);
        return lists[0];
    }

    merge(list1, list2) {
        console.log(`merge ${list1} and ${list2}`);
        let newHead = new ListNode();
        let current = newHead;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                current.next = list1;
                current = current.next;
                list1 = list1.next;
            }
            else {
                current.next = list2;
                current = current.next;
                list2 = list2.next;
            }
        }

        if (list1) {
            current.next = list1;
        } 
        else if (list2) {
            current.next = list2;
        }

        console.log("result " + newHead);

        return newHead.next;
    }
}
