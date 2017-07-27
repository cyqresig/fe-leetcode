/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i, len = nums.length;
    var hashTable = {};
    for(i = 0; i < len; i++) {
        var num = nums[i];
        var prevIndex;
        if (i > 0) {
            prevIndex = hashTable[target - num];
            if (typeof prevIndex !== 'undefined') {
                return [prevIndex, i]
            }
        }
        hashTable[num] = i;
    }
    return null;
};
