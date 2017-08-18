/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var len_a = a.length;
    var len_b = b.length;
    var len_left;
    var num_a, num_b, num_left;
    var sum, left;
    var sumString = '';
    var carry = 0;
    while(len_a - 1 >= 0 && len_b - 1 >= 0) {
        sum = 0;
        num_a = parseInt(a[len_a - 1]);
        num_b = parseInt(b[len_b - 1]);
        sum = num_a + num_b;
        if (carry === 1) {
            carry = 0;
            sum += 1;
        }
        if (sum > 1) {
            carry = 1;
            sum %= 2;
        }
        sumString = sum + sumString;
        len_a--;
        len_b--;
    }
    len_left = (len_a > 0) ? len_a : len_b;
    left = a.length > b.length ? a : b;
    while(len_left - 1 >= 0) {
        sum = 0;
        num_left = parseInt(left[len_left - 1]);
        sum = num_left;
        if (carry === 1) {
            carry = 0;
            sum += 1;
        }
        if (sum > 1) {
            carry = 1;
            sum %= 2;
        }
        sumString = sum + sumString;
        len_left--;
    }
    if (carry === 1) {
        sumString = '1' + sumString;
    }
    return sumString;
};