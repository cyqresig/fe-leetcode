/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var r = x;
    var lastR;
    while (r*r > x) {
        r = (r + x/r) / 2;
        // js float computation is not correct and occur infinite loop in some cases, e.g: x = 5, x = 7, etc.
        if (lastR === r) {
            break;
        }
        lastR = r;
    }
    // return r;
    return Math.floor(r); // return the root?
};