# Solution

套用数学公式，-_-!!!

js 浮点数计算有坑，很多情况下无法得到精准的值。

例如，当 x = 5时，公式计算得值为 2.23606797749979（还有部分位数没显示），
但是该值的平方，得值为 5.000000000000001（正确的值应为5），
从而引发了死循环，故需要针对这种情况额外做处理


```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var r = x;
    var lastR;
    while (r*r > x) {
        r = (r + x/r) / 2;
        // js float computation is not correct and occur infinite loop in some cases, e.g: x = 5, x = 7, etc.
        if (lastR === r) {
            break;
        }
        lastR = r;
    }
    // return r;
    return Math.floor(r); // does it mean that return the root?
};
```

* 时间复杂度：O(???)

* 空间复杂度: O(n)

