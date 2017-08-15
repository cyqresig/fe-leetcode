/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var lastWordLength = 0;
    var i, len = s.length;
    for (i = len - 1; i >= 0; i--) {
        if (/[A-Za-z]/.test(s[i])) {
            lastWordLength++;
        } else if(/\s/.test(s[i]) && lastWordLength > 0) {
            break;
        }
    }
    return lastWordLength;
};