class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /*
        [1,2,2,3,3,3]
        
        itemToFrequency:
        1->1
        2->2
        3->3*/
        const itemToFrequency = new Map();
        for (let index = 0; index < nums.length; index++) {
            itemToFrequency.set(nums[index], (itemToFrequency.get(nums[index]) || 0) + 1);
        }
        console.log(itemToFrequency);

        /*
        frequencyToItem:
        1->1
        2->2
        3->3*/
        const frequencyToItem = new Map();
        for (let entry of itemToFrequency.entries()) {
            if (!frequencyToItem.has(entry[1])) {
                frequencyToItem.set(entry[1], []);
            }
            frequencyToItem.get(entry[1]).push(entry[0]);
        } 

        console.log(frequencyToItem);
        /*sort by frequency desc
        3->3
        2->2
        1->1*/

        const itemsDesc = Array.from(frequencyToItem.entries()).sort((a, b) => b[0] - a[0]); 

        console.log(itemsDesc);

        //return top k
        let result = [];
        for (let frequencyIndex = 0; frequencyIndex < itemsDesc.length; frequencyIndex++) {
            const entry = itemsDesc[frequencyIndex];
            const remainingLength = k - result.length;

            if (entry[1].length < remainingLength) {
                result = result.concat(entry[1]);
            }
            else if (entry[1].length === remainingLength) {
                result = result.concat(entry[1].slice(0, remainingLength));
            }
            else {
                return result;
            }
        }

        return result;
    }
}
