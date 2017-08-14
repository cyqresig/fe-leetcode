# Solution

该题需要分析出算法核心点，

1. 从前向后遍历，当数组项求合取最大值，

2. 当上一次求合值负数或者为0时，求合值重新赋值为当前数组项，并与最大值比较取大的那个

3. 当上一次求合值为正数时，求合值加上当前数组项，并与最大值比较取大的那个

所以需要缓存二个值，一个是求合值，一个是最大值

```js
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
```

### 复杂度分析

* 时间复杂度：O(n)
  
* 空间复杂度: O(1)

