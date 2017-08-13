# Solution

对 js 来说该题就是实现 String.indexOf 函数

##1 遍历法

原串 o, 子串 s
1. 从 o 的第 i + j 项（i初始为0），与 s 的第 j 项（j初始为0）开始比较，
1.1 如相等，则 j+1, 重复步骤 1， 直到 i 或 j 超出串长度
1.2 如不相等，则 i+1, 重复步骤 1， 直到 i 或 j 超出串长度

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var i, j, isSub;
    if (haystack == null || needle == null) {
        return -1;
    }
    for(i = 0; i < haystack.length - needle.length + 1; i++) {
        isSub = true;
        
        for(j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isSub = false;
                break;
            }
        }
        
        if (isSub) {
            return i;
        }
    }
    return -1;
};
```

### 复杂度分析

* 时间复杂度：O( (n - m + 1) * m )

  n 为原串长度，m 为子串长度
  
* 空间复杂度: O(1)


****** 注：应用线性算法降低复杂度 ******