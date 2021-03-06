/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverse = function(x) {
        let reverseNum = 0;
        let minusFlag = 1;
        if (x >= - Math.pow(2, 31) && x <= Math.pow(2, 31)) {
            if (x < 0) {
                minusFlag = -1;
            }
            let num = minusFlag * x;
            let tempNum;
            while(num !== 0) {
                tempNum = num % 10;
                num = Math.floor(num / 10);
                reverseNum = reverseNum * 10 + tempNum;
            }
            reverseNum = minusFlag * reverseNum;
        }
        return reverseNum;
    };
    return reverse(x) === x;
};