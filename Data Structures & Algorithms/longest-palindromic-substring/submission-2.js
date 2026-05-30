class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        
        let longest = "";
        const expand = (left, right) => {
            if (left < 0 || right >= s.length) {
                return "";
            }

            let result = "";
            let done = false;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                done = true;    
                left--;
                right++;
            }
if (done) {
    result = s.substring(left + 1, right);
}
            return result;
        };

        for (let index = 0; index < s.length; index++) {
            const palindromeOdd = expand(index, index);
            if (longest.length < palindromeOdd.length) {
                longest = palindromeOdd;
            }

            const palindromeEven = expand(index, index + 1);
            if (longest.length < palindromeEven.length) {
                longest = palindromeEven;
            }
        }

        return longest;
    }
}
