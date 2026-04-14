class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let shortestLength = Number.POSITIVE_INFINITY;
        let shortest = "";
        const mapS = new Map();
        const mapT = new Map();
        
        for (let char of t) {
            mapT.set(char, (mapT.get(char) || 0) + 1);
        }

        let left = 0;
        let right = 0;
        let matches = 0;

        while (right < s.length) {
            const charS = s[right];
            console.log(`${s.substring(0,left)+"_L_"+ s.substring(left, right) + "_R_" + s.substring(right)} left ${left} at ${s[left]} / right ${right} at ${charS}`);
            mapS.set(charS, (mapS.get(charS) || 0) + 1);
            if (mapT.has(charS) && mapS.get(charS) == mapT.get(charS)) {
                matches++;
                console.log(`matches ++ ${matches}`);
            } 

            while (matches >= mapT.size && left <= right) {
                console.log(`matches equals ${matches} left ${left} at ${s[left]} right ${right} at ${s[left]}`)
                if (shortestLength > right + 1 - left) {
                    shortestLength = right + 1 - left;
                    shortest = s.substring(left, right + 1);
                    console.log(`shortest ${shortest}`);
                }
                mapS.set(s[left], mapS.get(s[left]) - 1);
                if (mapT.has(s[left]) && mapS.get(s[left]) === mapT.get(s[left]) - 1) {
                    matches--;
                    console.log(`left matches-- ${matches}`)
                }
                left++;
            }

            right++;
        }

        return shortest;
    }
}
