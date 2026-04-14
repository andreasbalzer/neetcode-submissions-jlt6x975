class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/\W/g, "").toLowerCase();
        console.log(str);
        let left = str.length % 2 === 0 ? Math.floor((str.length / 2) - 1) : Math.floor(str.length / 2);
        let right = str.length % 2 === 0 ? Math.floor(str.length / 2) : Math.floor(str.length / 2);
        while (left >= 0 && right < str.length) {
            console.log(`left ${left}: ${str[left]} right ${right}: ${str[right]}`)
            if (str[left] === str[right]) {
                left--;
                right++;
            }
            else {
                return false;
            }
        } 
        return true;
    }
}
