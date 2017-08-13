# Solution

先找到规律：

n 序列的值，使用规定的读法后生成的值即为 n + 1 序列的值，然后以此类推下去,
其中 n = 1 序列的值已知。

注：分为count与say，count的值并不限定于1, 2, 理论上可能为任何正整数。

```js
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var i, j, oldCasLen, oldCas, cas = '1', count = 1;
    if(n > 1) {
        for(i = 1; i < n; i++) {
            j = 0;
            oldCas = cas;
            oldCasLen = oldCas.length;
            cas = '';
            while(j < oldCasLen) { 
                if (j + 1 < oldCasLen && oldCas[j] === oldCas[j + 1]) {
                    count++;
                }else if (oldCas[j] === '1') {
                        cas += count + '1';
                        count = 1;
                } else if (oldCas[j] !== '1') {
                      cas += count + oldCas[j];
                      count = 1;
                }
                j++;
            } 
        }
    }
    return cas;
};
```

### 复杂度分析

* 时间复杂度：O( n * ??? )

  n 为输入项的正整数值
  
* 空间复杂度: O(n)
