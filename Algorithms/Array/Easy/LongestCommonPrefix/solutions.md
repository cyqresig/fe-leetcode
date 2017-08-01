# Solution

##1 遍历法

以字符串数组中的第一项的字符长度为基准（要考虑后面的项的字符长度大于第一项的情况），开始遍历：
第一项的第一个字符，与第二，三...n项的第一个字符比较是否相等，不相等则停止遍历, 相等则保存该字符
第一项的第二个字符，与第二，三...n项的第二个字符比较是否相等，不相等则停止遍历, 相等则保存该字符
...
第一项的第m个字符，与第二，三...n项的第m个字符比较是否相等，不相等则停止遍历, 相等则保存该字符

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var i, j;
    var prefix = '';
    if (strs.length > 1) {
        for(i = 0; i < strs[0].length; i++) {
            for( j = 1; j < strs.length; j++) {
                if (strs[j].length === i || strs[0][i] !== strs[j][i]) {
                    return prefix;                
                }
            }
            prefix += strs[0][i];
        }
        return prefix;
    } else if (strs.length === 1){
        return strs[0];
    } else {
        return prefix;
    }
    
};
```
### 复杂度分析

* 时间复杂度：O( m * (n - 1) )

  m 为字符长度，n 为数组字符串项数
  
* 空间复杂度: O(1)

