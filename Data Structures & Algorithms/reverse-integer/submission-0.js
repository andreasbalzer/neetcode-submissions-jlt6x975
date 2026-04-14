class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let result = 0;
    
        const MIN = 2**31 * (-1);
        console.log(MIN);
        const MAX = 2**31;
        while (x !== 0) {
            const digit = x % 10;
            x = Math.trunc(x / 10);
            console.log(x);

            if ((result > (MAX / 10)) || (result === MAX/10 && digit > MAX%10) || (result < (MIN / 10)) || (result === MIN/10 && digit < MIN%10)) {
                return 0;
            }
            result = result * 10 + digit;
        }

        return result;
    }
}
