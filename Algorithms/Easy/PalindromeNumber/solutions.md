# Solution

##1 reverse 比较法

将数字进行reverse后，判断与原数字是否相等

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverse = function(x) {
        let reverseNum = 0;
        let minusFlag = 1;
        if (x >= - Math.pow(2, 31) && x <= Math.pow(2, 31)) {
            if (x < 0) {
                minusFlag = -1;
            }
            let num = minusFlag * x;
            let tempNum;
            while(num !== 0) {
                tempNum = num % 10;
                num = Math.floor(num / 10);
                reverseNum = reverseNum * 10 + tempNum;
            }
            reverseNum = minusFlag * reverseNum;
        }
        return reverseNum;
    };
    return reverse(x) === x;
};
```
### 复杂度分析

* 时间复杂度：O(n)

  n为数字的长度
  
* 空间复杂度: O(1)

