# Solution

## 堆栈法
考虑会存在包含 [([]){}] 的情况，核心点在于如要符合情况，所有层级上的的括号必须成双，

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var i, len, c;
    
    for (i = 0, len = s.length; i < len; i++) {
        c = s[i];
        if (c === '(') {
           stack.push(')');     
        } else if(c === '{') {
            stack.push('}');
        } else if(c === '[') {
            stack.push(']')
        } else if (stack.length > 0 && stack[stack.length - 1] === c) {
            stack.pop();
        } else {
            return false;
        }
    }
    return !stack.length;
    
};
```
### 复杂度分析

* 时间复杂度：O(n)

  n为字符串长度
  
* 空间复杂度: O(n / 2)

