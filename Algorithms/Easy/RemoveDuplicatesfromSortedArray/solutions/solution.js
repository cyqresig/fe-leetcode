/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var i = 1;
    var v = 1;
    while (i < nums.length) {
        if (nums[i] !== nums[i - 1]) {
            nums[v] = nums[i];
            v++;
        }
        i++;
    }
    nums.length = v;
    return nums.length;
};