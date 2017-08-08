/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var i, j, isSub;
    if (haystack == null || needle == null) {
        return -1;
    }
    for(i = 0; i < haystack.length - needle.length + 1; i++) {
        isSub = true;

        for(j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isSub = false;
                break;
            }
        }

        if (isSub) {
            return i;
        }
    }
    return -1;
};