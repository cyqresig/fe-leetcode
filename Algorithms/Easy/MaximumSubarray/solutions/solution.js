/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0, max, i, len;
    for (i = 0, len = nums.length; i < len; i++) {
        if (sum > 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        if (i === 0) {
            max = sum;
        } else {
            max = Math.max(max, sum);
        }
    }
    return max;
};