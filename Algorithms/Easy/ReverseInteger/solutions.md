# Solution

##1 整除取余法

32位有符号整数范围 -2^31 ~ 2^31
32位无符号整数范围 0 ~ 2^32

1. 将数字取余10，得到最低位项的数
2. 将数字整除10，得到除了最低位项外的数字
3. 如果步骤2的数不为0，则使用步骤1得到的数字乘10，加上重复步骤1的结果，并重复步骤2

```js
/**
 * @param {number} x
 * @return {number}
 */
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
```
### 复杂度分析

* 时间复杂度：O(n)

  n为数字的长度
  
* 空间复杂度: O(1)

