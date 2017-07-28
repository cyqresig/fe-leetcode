/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var len = numbers.length;
    var indices = null;
    var minNum, maxNum, minNumIndex, maxNumIndex;
    minNumIndex = 0;
    maxNumIndex = len - 1;
    while(minNumIndex < maxNumIndex) {
        minNum = numbers[minNumIndex];
        maxNum = numbers[maxNumIndex];
        if (minNum + maxNum > target) {
            maxNumIndex--;
        } else if (minNum + maxNum < target) {
            minNumIndex++;
        } else {
            indices = [minNumIndex + 1, maxNumIndex + 1];
            break;
        }
    }
    return indices;
};
