/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var len_a = a.length;
    var len_b = b.length;
    var sumString = '';
    var carry = 0;
    var sum;
    while(len_a - 1 >= 0 || len_b - 1 >= 0) {
        sum = carry;
        if (len_a - 1 >= 0) {
            sum += parseInt(a[len_a - 1]);
        }
        if (len_b - 1 >= 0) {
            sum += parseInt(b[len_b - 1]);
        }
        carry = Math.floor(sum / 2);
        sum %= 2;
        sumString = sum + sumString;
        len_a--;
        len_b--;
    }
    if (carry === 1) {
        sumString = '1' + sumString;
    }
    return sumString;
};