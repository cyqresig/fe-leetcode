# Solution

##1 暴力循环

遍历每个元素 x，并查找这个元素之后的每个元素 y 是否存在 x + y = target

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i, len = nums.length;
    for(i = 0; i < len - 1; i++) {
        for(j = i + 1; j < len; j++) {
            var prevNum = nums[i];
            var nextNum = nums[j];
            if (prevNum + nextNum === target) {
                return [i, j];
            }
        }
    }
    return null;
};
```
### 复杂度分析

* 时间复杂度：O(n * (n - 1) / 2)

  外循环次数是项数减1，内循环次数是根据项数依次递减至1（例如，项数是5，外循环次数是4，内循环次数分别是4，3，2，1），
  故计算次数分别是 n - 1, n - 2, ..., 1，通过公式（首项 + 尾项）* 项数 / 2 可以得到最终的次数。（首项为 n - 1, 尾项为 1, 项数为 n - 1）
  
* 空间复杂度: O(1)

##2 哈希表

遍历每个元素 x ，将元素 x 作为键，下标 i 作为值存入哈希表 m（ js中使用Object ），同时在 m 中查找键 target - x 是否存在

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i, len = nums.length;
    var hashTable = {};
    for(i = 0; i < len; i++) {
        var num = nums[i];
        var prevIndex;
        if (i > 0) {
            prevIndex = hashTable[target - num];
            if (typeof prevIndex !== 'undefined') {
                return [prevIndex, i]
            }
        }
        hashTable[num] = i;
    }
    return null;
};
```

* 时间复杂度：O(n) 或 O(nlogn)

  外循环次数为项数 n，哈希查找键的时间复杂度为 O(1) 或 O(logn)。（js Object 查找键 的时间复杂度实现取决于浏览器内核）

* 空间复杂度: O(n)

