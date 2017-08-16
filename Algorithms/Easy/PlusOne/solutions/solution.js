/**
 * @param {number[]} nums
 * @return {number}
 */
var plusOne = function(digits) {
    var i, len = digits.length;
    var num, carry = 0;
    if (len > 0) {
        for (i = len - 1; i >=0; i--) {
            num = digits[i] + carry;
            if (i == len - 1) {
                num += 1;
            }
            digits[i] = num % 10;
            carry = Math.floor(num / 10);
        }
    }
    if (carry === 1) {
        digits.unshift(1);
    }
    return digits;
};