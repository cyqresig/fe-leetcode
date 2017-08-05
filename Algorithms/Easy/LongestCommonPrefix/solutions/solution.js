/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var i, j;
    var prefix = '';
    if (strs.length > 1) {
        for(i = 0; i < strs[0].length; i++) {
            for( j = 1; j < strs.length; j++) {
                if (strs[j].length === i || strs[0][i] !== strs[j][i]) {
                    return prefix;
                }
            }
            prefix += strs[0][i];
        }
        return prefix;
    } else if (strs.length === 1){
        return strs[0];
    } else {
        return prefix;
    }

};