/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i, len = nums.length, indices = null;
    for(i = 0; i < len - 1; i++) {
        for(j = i + 1; j < len; j++) {
            var prevNum = nums[i];
            var nextNum = nums[j];
            if (prevNum + nextNum === target) {
                indices = [i, j];
                return indices;
            }
        }
    }
    return indices;
};
