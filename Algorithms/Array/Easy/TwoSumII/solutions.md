# Solution

##1 最小/最大基准值法

数组是顺序的，例如[1，3，6，10，12]，起始项是最小值，结尾项是最大值

假设目标数 z，
 
核心步骤：
1. 找出最小基准值 x，最大基准值 y
2. 如果 x + y > z, 则最大基准值左移一项（为什么不右移一位最小基准值？因为右边的项比左边的项大，现在需要取更小的值）
3. 如果 x + y < z, 则最小基准值右移一项（为什么不左移一位最大基准值？因为右边的项比左边的项小，现在需要取更大的值)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var len = numbers.length;
    var indices = null;
    var minNum, maxNum, minNumIndex, maxNumIndex;
    minNumIndex = 0;
    maxNumIndex = len - 1;
    while(minNumIndex < maxNumIndex) {
        minNum = numbers[minNumIndex];
        maxNum = numbers[maxNumIndex];
        if (minNum + maxNum > target) {
            maxNumIndex--;
        } else if (minNum + maxNum < target) {
            minNumIndex++;
        } else {
            indices = [minNumIndex + 1, maxNumIndex + 1];
            break;
        }
    }
    return indices;
};
```
### 复杂度分析

* 时间复杂度：O(n)
  
* 空间复杂度: O(1)

