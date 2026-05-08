class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (!wordList.includes(endWord) || beginWord === endWord) {
            console.log(`fast exit`);
            return 0;
        }


        const map = new Map();
        wordList.push(beginWord);
        for (const word of wordList) {
            for (let index = 0; index < word.length; index++) {
                const pattern = word.substring(0, index) + "*" + word.substring(index + 1);

                if (!map.has(pattern)) {
                    map.set(pattern, []);
                }
                map.get(pattern).push(word);
            }
        }

        const visit = new Set([beginWord]);
        let res = 1;
        const queue = [beginWord];
        while (queue.length) {
            const size = queue.length;
            for (let index = 0; index < size; index++) {
                const word = queue.shift();
                if (word === endWord) {
                    console.log(`found`);
                    return res;
                }

                for (let i = 0; i < word.length; i++) {
                    const pattern = word.substring(0, i) + "*" + word.substring(i + 1);
                    console.log(pattern);
                    for (const neigh of map.get(pattern)) {
                        if (!visit.has(neigh)) {
                            visit.add(neigh);
                            queue.push(neigh);
                        }
                    }
                }
            }
            res++;
        }
        return 0;
    }
}
