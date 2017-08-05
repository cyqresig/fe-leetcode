# Solution

##1 常规解法

相邻的二个数不相等时，才会计算最终有效的数组长度，并重新赋值数组项，最后将超出有效长度的项移除

```js
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
```

### 复杂度分析

* 时间复杂度：O(n)
  
* 空间复杂度: O(1)