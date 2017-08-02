/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var i, len, c;

    for (i = 0, len = s.length; i < len; i++) {
        c = s[i];
        if (c === '(') {
            stack.push(')');
        } else if(c === '{') {
            stack.push('}');
        } else if(c === '[') {
            stack.push(']')
        } else if (stack.length > 0 && stack[stack.length - 1] === c) {
            stack.pop();
        } else {
            return false;
        }
    }
    return !stack.length;

};
