/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var i, len = nums.length;
    for (i = 0; i < len; i++) {
        if (nums[i] === target || nums[i] > target) {
            return i;
        } else if(i == len - 1 && nums[i] < target) {
            return i + 1;
        }
    }
};