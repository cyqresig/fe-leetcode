/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var c, prevC = null, i, len = s.length;
    var repeatEqualCount = 0;
    var num = 0;
    for(i = 0; i < len; i++) {
        c = s[i];
        if (c === prevC) {
            repeatEqualCount++;
        } else {
            repeatEqualCount = 0
        }
        if (repeatEqualCount === 4) {
            throw new Error(c + ' cannot be repeated by four times');
        }
        switch (c) {
            case 'I':
                num += 1;
                break;
            case 'V':
                num += 5;
                if (prevC === 'I') {
                    num -= 1 * 2;
                }
                break;
            case 'X':
                num += 10;
                if (prevC === 'I') {
                    num -= 1 * 2;
                } else if (prevC === 'V'){
                    num -= 5 * 2;
                }
                break;
            case 'L':
                num += 50;
                if (prevC === 'X') {
                    num -= 10 * 2;
                }
                break;
            case 'C':
                num += 100;
                if (prevC === 'X') {
                    num -= 10 * 2;
                } else if (prevC === 'L'){
                    num -= 50 * 2;
                }
                break;
            case 'D':
                num += 500;
                if (prevC === 'C') {
                    num -= 100 * 2;
                }
                break;
            case 'M':
                num += 1000;
                if (prevC === 'C') {
                    num -= 100 * 2;
                } else if (prevC === 'D'){
                    num -= 500 * 2;
                }
                break;
            default:
                throw new Error(c + ' is not a roman number');
        }
        prevC = c;
    }
    if (num > 3999) {
        throw new Error(num + ' is in the range from 1 to 3999');
    }
    return num;
};