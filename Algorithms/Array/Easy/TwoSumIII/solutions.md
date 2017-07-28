# Solution

##1 哈希表

参考 TwoSum 中的哈希表解法，使用 Set 替换 哈希表

```js
class TwoSum {

    constructor() {
        this.set = new Set();
    }

    add(num) {
        this.set.add(num);
    }

    find(num) {
        let isFound = false;
        for(let item of this.set.keys()) {
            if (this.set.has(num - item)) {
                isFound = true;
            }
        }
        return isFound;
    }
}
```

* 时间复杂度：O(n) 或 O(nlogn)

  外循环次数为项数 n，Set查找键的时间复杂度为 O(1) 或 O(logn)。（js Set 查找键 的时间复杂度实现取决于浏览器内核）

* 空间复杂度: O(n)
