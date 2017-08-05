# Solution

罗马数字共有七个，即I(1)，V(5)，X(10)，L(50)，C(100)，D(500)，M(1000)。按照下面的规则可以表示任意正整数。

重复数次：一个罗马数字重复几次，就表示这个数的几倍。 

右加左减：在一个较大的罗马数字的右边记上一个较小的罗马数字，表示大数字加小数字。在一个较大的数字的左边记上一个较小的罗马数字，表示大数字减小数字。但是，左减不能跨等级。比如，99不可以用IC表示，用XCIX表示。 

加线乘千：在一个罗马数字的上方加上一条横线或者在右下方写M，表示将这个数字乘以1000，即是原数的1000倍。同理，如果上方有两条横线，即是原数的1000000倍。 

单位限制：同样单位只能出现3次，如40不能表示为XXXX，而要表示为XL。

注：要注意罗马数字计算规则的坑，优先左减原则，当右边的罗马数字比左边的罗马数字小，同时右边的右边的罗马数字比右边的逻辑数字大时，
   右边的数字和右边的右边的数字会优先执行相减操作，然后再与左边的罗马数字相加。（例如：MCDL等于1450）

注：根据左减不能跨等级原则（奇怪的原则，实际效果是指只能左减左起的同一个等级的数，比如 X 可以左减 I V，但 L 只能左减 X）,
    故 IL，VL，XD，LD，在罗马数字中默认不存在。
    
注：VV => X, LL => C, DD => M, 
   VX => V, LC => L, DM => D，
   这样的组件在罗马数字中默认不存在？

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var c, prevC = null, i, len = s.length;
    var repeatEqualCount = 0;
    var num = 0;
    for(i = 0; i < len; i++) {
        c = s[i];
        if (c === prevC) {
            repeatEqualCount++;
        } else {
            repeatEqualCount = 0
        }
        if (repeatEqualCount === 4) {
            throw new Error(c + ' cannot be repeated by four times');
        }
        switch (c) {
            case 'I':
                num += 1;
                break;
            case 'V':
                num += 5;
                if (prevC === 'I') {
                    num -= 1 * 2;
                }
                break;
            case 'X':
                num += 10;
                if (prevC === 'I') {
                    num -= 1 * 2;
                } else if (prevC === 'V'){
                    num -= 5 * 2;
                }
                break;
            case 'L':
                num += 50;
                if (prevC === 'X') {
                    num -= 10 * 2;
                }
                break;
            case 'C':
                num += 100;
                if (prevC === 'X') {
                    num -= 10 * 2;
                } else if (prevC === 'L'){
                    num -= 50 * 2;
                }
                break;
            case 'D':   
                num += 500;
                if (prevC === 'C') {
                    num -= 100 * 2;
                }
                break;
            case 'M':    
                num += 1000;
                if (prevC === 'C') {
                    num -= 100 * 2;
                } else if (prevC === 'D'){
                    num -= 500 * 2;
                }
                break;
            default:
                throw new Error(c + ' is not a roman number');
        }
        prevC = c;
    }
    if (num > 3999) {
        throw new Error(num + ' is in the range from 1 to 3999');
    }
    return num;
};
```
### 复杂度分析

* 时间复杂度：O(n)

  n为数字的长度
  
* 空间复杂度: O(1)

