# Solution

从字符串末尾倒序匹配，

1. 如先匹配到空格，则继续向前匹配直到匹配到英文字母，如一直未匹配到字母，结束并返回0

2. 如匹配到字母，则继续向前匹配直到匹配到空格，如匹配到，则结束并返回连续匹配字母长度，如一直未匹配到空格，结束并返回连续匹配字母长度

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var lastWordLength = 0;
    var i, len = s.length;
    for (i = len - 1; i >= 0; i--) {
        if (/[A-Za-z]/.test(s[i])) {
            lastWordLength++;
        } else if(/\s/.test(s[i]) && lastWordLength > 0) {
            break;
        }
    }
    return lastWordLength;
};
```

### 复杂度分析

* 时间复杂度：O(n)

  n 为字符串长度
  
* 空间复杂度: O(1)
