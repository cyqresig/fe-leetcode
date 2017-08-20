# Solution

[1] 1 -> 1
[2] 2 -> 1 + 1, 2,
[3] 3 -> 1 + 1 + 1, 2 + 1, 1 + 2,
[5] 4 -> 1 + 1 + 1 + 1, 2 + 2, 2 + 1 + 1, 1 + 2 + 1, 1 + 1 + 2
[8] 5 -> 1 + 1 + 1 + 1 + 1, 2 + 2 + 1, 1 + 2 + 2, 2 + 1 + 2, 1 + 2 + 1 + 1, 1 + 1 + 2 + 1, 1 + 1 + 1 + 2, 2 + 1 + 1 + 1
[13]  6 -> 1 + 1 + 1 + 1 + 1 + 1, 2 + 1 + 1 + 1, 1 + 2 + 1 + 1 + 1, 1 + 1 + 2 + 1 + 1, 1 + 1 + 1 + 2 + 1, 1 + 1 + 1 + 1 + 2,
           2 + 2 + 1 + 1, 2 + 1 + 2 + 1, 2 + 1 + 1 + 2, 1 + 2 + 2 + 1, 1 + 2 + 1 + 2, 1 + 1 + 2 + 2,  2 + 2 + 2

数学题公式，如果不知道公式可以列出足够数量的走法，然后找出公式。

公式：从第 3 阶开始，n 阶的走法 = n - 1 阶的走法 + n - 2 阶的走法

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var stepWays = 0;
    var prevStepWays = 0;
    var prevTwoStepWays = 0;
    var i;
    if (n === 1) {
        stepWays = 1;
    } else if (n === 2) {
        stepWays = 2;
    } else {
        prevTwoStepWays = 1;
        prevStepWays = 2;
        for (i = 2; i < n; i++) {
            stepWays = prevTwoStepWays + prevStepWays;
            prevTwoStepWays = prevStepWays;
            prevStepWays = stepWays;
        }
    }
    return stepWays;
};
```

### 复杂度分析

* 时间复杂度：O(n - 2)

  n 为 step 数
  
* 空间复杂度: O(1)
