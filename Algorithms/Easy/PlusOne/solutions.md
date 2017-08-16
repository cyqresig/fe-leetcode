# Solution

这道题的要求是给定一个数组表示非负整数，其高位在数组的前面，低位在数组的后面，对这个整数加1。
返回同样格式的数组。

可以采取从低位开始加1的操作，然后处理进位。

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i, len = digits.length;
    var num, carry = 0;
    if (len > 0) {
        for (i = len - 1; i >=0; i--) {
            num = digits[i] + carry;
            if (i == len - 1) {
                num += 1;
            }
            digits[i] = num % 10;
            carry = Math.floor(num / 10);
        }
    }
    if (carry === 1) {
        digits.unshift(1);
    }
    return digits;
};
```

### 复杂度分析

* 时间复杂度：O(n)
  
* 空间复杂度: O(1)