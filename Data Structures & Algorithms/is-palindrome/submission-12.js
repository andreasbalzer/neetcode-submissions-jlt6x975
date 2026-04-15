class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/\W/ig, "").toLowerCase();

//nolemonnomelon
//      ^^
// index is 0-based, so we need to subtract one
        let left = Math.floor((s.length - 1) / 2);
        let right = s.length % 2 === 0 ? left + 1 : left;
        while (left >= 0) {
            if (s[left] !== s[right]) {
                return false;
            }

            left--;
            right++;
        }

        return true;
    }
}