/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    var v = 0;
    while(i < nums.length) {
        if (nums[i] !== val) {
            nums[v] = nums[i];
            v++;
        }
        i++;
    }
    nums.length = v;
    return nums.length;
};