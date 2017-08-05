# Solution

##1 最大值比较法

从后向前可以充分利用数组长度，直接设置数组项的值，并且只需要判断nums1是否先比较尽所有项即可（nums2先比较尽时，nums1不需要再处理）

```js
/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var index_nums1 = m - 1;
    var index_nums2 = n - 1;
    var new_index_num1 = m + n - 1;
    while(index_nums1 >= 0 && index_nums2 >= 0) {
        if (nums1[index_nums1] > nums2[index_nums2]) {
             nums1[new_index_num1] = nums1[index_nums1];
             index_nums1--;
        } else {
            nums1[new_index_num1] = nums2[index_nums2];
            index_nums2--;
        }
        new_index_num1--;
    }
    while(index_nums2 >= 0) {
        nums1[new_index_num1] = nums2[index_nums2];
        index_nums2--;
        new_index_num1--;
    }
};
```
### 复杂度分析

* 时间复杂度：O( m + n )
  
* 空间复杂度: O(1)

