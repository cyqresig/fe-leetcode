# Solution

##1 常规解法

从左开始比较数组项，重新赋值与val不相等的数组项值

```js
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
```

### 复杂度分析

* 时间复杂度：O(n)
  
* 空间复杂度: O(1)