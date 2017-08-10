# Solution

从头遍历数组项，
如数组项等于目录项，则返回该数组项下标，
如数组项大于目录项，则返回该数组项下标，
如数组项为最后一项，并且小于目录项，则返回该数组项下标 + 1

```js
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
```
### 复杂度分析

* 时间复杂度：O(n)

  n为数字的长度
  
* 空间复杂度: O(1)

