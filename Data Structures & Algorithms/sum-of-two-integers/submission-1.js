class Solution {
    getSum(a, b) {
        let result = 0;
        let carry = 0;
        for (let i = 0; i < 32; i++) {
            let digitA = a & 1;
            let digitB = b & 1;
            let sum = digitA ^ digitB ^ carry;
            carry = (digitA & digitB) | (carry & (digitA ^ digitB));
            
            result |= (sum << i);
            a >>>= 1;
            b >>>= 1;
        }
        return result;
    }
}
