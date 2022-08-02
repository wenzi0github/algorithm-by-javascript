// https://leetcode-cn.com/problems/sorted-merge-lcci/
// 合并排序的数组

// 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

// 初始化 A 和 B 的元素数量分别为 m 和 n。

// 执行用时：60 ms
// 内存消耗：34.2 MB
var merge = function(A, m, B, n) {
    let i = 0,
        j = 0;

    while (j < n) {
        if (B[j] < A[i]) {
            A.splice(i, 0, B[j]);
            A.pop();
            j++;
        } else if (i >= m + j) {
            A.splice(i, 1, B[j]);
            j++;
        } else {
            i++;
        }
    }
};
