class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
//4
//1/2

    isPalindrome(s) {
        const input = s.replace(/\W/g, "").toLowerCase();
        console.log(input);
        let left = input.length % 2 === 0 ? (input.length / 2) - 1 : Math.floor(input.length / 2);
        let right = input.length % 2 === 0 ? (input.length / 2) : Math.floor(input.length / 2);

        while (left >= 0 && right < input.length && input[left] === input[right]) {
            left--;
            right++;
        }

        return left === -1;
    }
}

// nolemonnomelon
// 