class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while (b !== 0) {
            let carry = (a & b) << 1;
            a ^= b;
            b = carry;
        }
        return a;
    }
}

/**
 a     =  101101
 b     = 1001011
 carry = 0010010
 a^b   = 1100110  
    
b=carry
a      = 1100110
b      = 0010010
carry  = 0000100
a^b    = 1110100

a      = 1110100
b      = 0000100
carry  = 0001000
a^b    = 1110000

a      = 1110000
b      = 0001000
carry  = 0000000
a^b    = 1111000




 */
