/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var stepWays = 0;
    var prevStepWays = 0;
    var prevTwoStepWays = 0;
    var i;
    if (n === 1) {
        stepWays = 1;
    } else if (n === 2) {
        stepWays = 2;
    } else {
        prevTwoStepWays = 1;
        prevStepWays = 2;
        for (i = 2; i < n; i++) {
            stepWays = prevTwoStepWays + prevStepWays;
            prevTwoStepWays = prevStepWays;
            prevStepWays = stepWays;
        }
    }
    return stepWays;
};

