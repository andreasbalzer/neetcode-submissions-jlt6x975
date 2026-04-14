class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        s = s.replaceAll(/[^a-zA-Z0-9]/g, "");
        
        let left = 0;
        let right = s.length - 1;
        while (left <= right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
